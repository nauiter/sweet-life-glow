# Modern Image Formats Guide (WebP & AVIF)

## ✅ Implementado

O projeto agora suporta formatos modernos de imagem (WebP e AVIF) com fallbacks automáticos para navegadores mais antigos.

## 🎯 Benefícios

| Formato | Compressão vs JPEG | Suporte de Navegadores | Qualidade |
|---------|-------------------|------------------------|-----------|
| **AVIF** | 50% menor | Chrome 85+, Firefox 93+ | Excelente |
| **WebP** | 25-35% menor | 96% dos navegadores | Excelente |
| **JPEG/PNG** | Baseline | 100% (fallback) | Boa |

### Impacto de Performance Esperado:
- **Redução de banda:** 40-60% 
- **LCP (Largest Contentful Paint):** -30-40%
- **Tempo de carregamento móvel:** -40-50%

## 🔧 Componente OptimizedImage

### Uso Básico

```tsx
import { OptimizedImage } from "@/components/ui/optimized-image";

// Simples
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
/>

// Com responsive sizes
<OptimizedImage
  src="/images/gallery-1.jpg"
  alt="Gallery artwork"
  width={400}
  height={710}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>

// Imagem prioritária (hero/above fold)
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero"
  width={1200}
  height={675}
  priority
  className="rounded-lg"
/>
```

### O Que Acontece Por Baixo dos Panos

```html
<!-- O componente gera automaticamente: -->
<picture>
  <!-- AVIF: Melhor compressão -->
  <source 
    type="image/avif" 
    srcset="/images/hero.avif 640w, /images/hero.avif 1200w, ..."
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  
  <!-- WebP: Ótima compressão -->
  <source 
    type="image/webp" 
    srcset="/images/hero.webp 640w, /images/hero.webp 1200w, ..."
    sizes="(max-width: 768px) 100vw, 50vw"
  />
  
  <!-- Fallback: JPEG/PNG original -->
  <img 
    src="/images/hero.jpg"
    alt="Hero"
    width={1200}
    height={675}
    loading="lazy"
  />
</picture>
```

## 📦 Funções Utilitárias

### getModernImageFormats()

Gera URLs para todos os formatos:

```tsx
import { getModernImageFormats } from "@/lib/imageOptimization";

const formats = getModernImageFormats("/images/hero.jpg", {
  width: 800,
  quality: 80
});

console.log(formats);
// {
//   avif: "/images/hero.avif?w=800&q=80",
//   webp: "/images/hero.webp?w=800&q=80",
//   fallback: "/images/hero.jpg?w=800&q=80"
// }
```

### generateModernSrcSets()

Gera srcsets responsivos para todos os formatos:

```tsx
import { generateModernSrcSets } from "@/lib/imageOptimization";

const srcsets = generateModernSrcSets("/images/gallery.jpg", 
  [640, 750, 1080, 1200], 
  { quality: 80 }
);

// Use com elemento <picture>
<picture>
  <source type="image/avif" srcSet={srcsets.avif} />
  <source type="image/webp" srcSet={srcsets.webp} />
  <img srcSet={srcsets.fallback} />
</picture>
```

### preloadModernImage()

Preload de imagens críticas com formatos modernos:

```tsx
import { preloadModernImage } from "@/lib/imageOptimization";

// No componente ou useEffect
preloadModernImage("/images/hero.jpg", {
  width: 1200,
  quality: 85
}, ['avif', 'webp']);
```

## 🔄 Migração de Componentes Existentes

### Antes (img simples):
```tsx
<img 
  src={heroImage} 
  alt="Hero" 
  className="w-full"
/>
```

### Depois (OptimizedImage):
```tsx
<OptimizedImage 
  src={heroImage} 
  alt="Hero" 
  width={1200}
  height={675}
  sizes="100vw"
  priority
  className="w-full"
/>
```

## 🎨 Exemplos de Uso

### Hero Section
```tsx
<OptimizedImage
  src="/images/sweet-character.jpg"
  alt="Sweet - Your Anime Art Sensei"
  width={600}
  height={600}
  sizes="(max-width: 1024px) 0vw, 42vw"
  priority
  className="w-full h-auto rounded-2xl"
/>
```

### Gallery Grid
```tsx
{artworks.map((art) => (
  <OptimizedImage
    key={art.id}
    src={art.image}
    alt={art.title}
    width={400}
    height={710}
    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
    className="w-full h-auto object-cover"
  />
))}
```

### Background Images
```tsx
<div className="relative">
  <OptimizedImage
    src="/images/gallery-bg.jpg"
    alt=""
    width={1920}
    height={1080}
    sizes="100vw"
    className="absolute inset-0 w-full h-full object-cover"
  />
</div>
```

## 🚀 Geração de Imagens

### Opção 1: CDN Automático (Recomendado)

Configure Cloudinary ou Imgix (veja CDN_SETUP_GUIDE.md):
- Converte formatos automaticamente
- Gera todos os tamanhos on-the-fly
- Cache global
- Zero manutenção

### Opção 2: Conversão Manual

Use ferramentas para gerar versões WebP e AVIF:

#### ImageMagick:
```bash
# WebP
magick convert input.jpg -quality 80 output.webp

# AVIF
magick convert input.jpg -quality 80 output.avif

# Batch conversion
for img in *.jpg; do
  magick convert "$img" -quality 80 "${img%.jpg}.webp"
  magick convert "$img" -quality 80 "${img%.jpg}.avif"
done
```

#### Squoosh CLI:
```bash
npm install -g @squoosh/cli

# WebP
squoosh-cli --webp '{"quality":80}' images/*.jpg

# AVIF  
squoosh-cli --avif '{"quality":80}' images/*.jpg
```

#### Online:
- [Squoosh.app](https://squoosh.app) - Interface visual
- [CloudConvert](https://cloudconvert.com) - Conversão em lote

### Opção 3: Script Automatizado

Crie `scripts/generate-modern-formats.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images';
const quality = 80;

fs.readdirSync(inputDir).forEach(file => {
  if (!/\.(jpg|jpeg|png)$/i.test(file)) return;
  
  const inputPath = path.join(inputDir, file);
  const baseName = file.replace(/\.(jpg|jpeg|png)$/i, '');
  
  // Generate WebP
  sharp(inputPath)
    .webp({ quality })
    .toFile(path.join(inputDir, `${baseName}.webp`));
  
  // Generate AVIF
  sharp(inputPath)
    .avif({ quality })
    .toFile(path.join(inputDir, `${baseName}.avif`));
});

console.log('✅ Modern formats generated!');
```

Execute:
```bash
npm install sharp
node scripts/generate-modern-formats.js
```

## 📊 Suporte de Navegadores

| Browser | WebP | AVIF |
|---------|------|------|
| Chrome 85+ | ✅ | ✅ |
| Firefox 93+ | ✅ | ✅ |
| Safari 16+ | ✅ | ✅ |
| Edge 85+ | ✅ | ✅ |
| Older browsers | ✅ (fallback) | ✅ (fallback) |

O elemento `<picture>` garante que navegadores antigos sempre recebam a imagem fallback.

## 🔍 Testando

### DevTools - Network Tab:
1. Abra DevTools (F12)
2. Network → Img
3. Recarregue a página
4. Verifique a coluna "Type":
   - Chrome/Firefox moderno: `avif` ou `webp`
   - Safari antigo: `jpeg` ou `png`

### Lighthouse:
```bash
npm run build
# Deploy e teste
```

Espere melhorias em:
- **Performance score**: +10-20 pontos
- **LCP**: -300-500ms
- **Total page weight**: -40-60%

## ⚡ Checklist de Implementação

- [x] Componente OptimizedImage criado
- [x] Funções de geração de formato moderno
- [x] Suporte a responsive srcset
- [x] Preload para formatos modernos
- [ ] Gerar versões WebP/AVIF de imagens existentes
- [ ] Migrar componentes principais para OptimizedImage
- [ ] Configurar CDN (opcional mas recomendado)
- [ ] Testar em navegadores antigos

## 🎯 Próximos Passos

1. **Imediato**: Use `<OptimizedImage>` em novos componentes
2. **Curto prazo**: Gere versões WebP/AVIF de imagens existentes
3. **Médio prazo**: Migre componentes existentes gradualmente
4. **Longo prazo**: Configure CDN para conversão automática

## 📚 Recursos

- [WebP Documentation](https://developers.google.com/speed/webp)
- [AVIF Documentation](https://web.dev/compress-images-avif/)
- [Picture Element Guide](https://web.dev/learn/design/picture-element/)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)

## 💡 Dicas

1. **Qualidade**: Use 75-85 para AVIF, 80-90 para WebP
2. **Tamanho**: AVIF ~30-50% menor que WebP, WebP ~25-35% menor que JPEG
3. **Prioridade**: Use `priority` apenas para imagens above-the-fold
4. **Sizes**: Sempre defina `sizes` para imagens responsivas
5. **Alt text**: Sempre inclua para acessibilidade e SEO

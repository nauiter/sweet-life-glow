# CDN Setup Guide - Sweet Life Animes

## 📦 O que foi implementado

✅ Service Worker para cache de imagens
✅ Sistema de otimização de imagens com suporte a Cloudinary e Imgix
✅ Prefetch automático da próxima batch de imagens na gallery
✅ PWA Manifest para instalação como app
✅ Design system centralizado com classes reutilizáveis

---

## 🚀 Service Worker (Já Ativo)

O Service Worker está configurado e ativo! Ele automaticamente:
- Cache todas as imagens após o primeiro carregamento
- Serve imagens do cache em visitas subsequentes
- Atualiza o cache quando novas imagens são baixadas
- Funciona offline para conteúdo já visitado

**Verificar:** Abra DevTools → Application → Service Workers

---

## 🖼️ CDN Setup (Opcional mas Recomendado)

### Por que usar CDN para imagens?

**Benefícios:**
- ✅ Redimensionamento automático
- ✅ Compressão inteligente (WebP, AVIF)
- ✅ Entrega mais rápida (rede global)
- ✅ Transformações on-the-fly
- ✅ Redução de ~70% no tamanho das imagens

---

## 📋 Opção 1: Cloudinary (Recomendado)

### Passo 1: Criar conta
1. Acesse: https://cloudinary.com/users/register/free
2. Crie uma conta gratuita (25GB/mês grátis)

### Passo 2: Obter Cloud Name
1. Faça login no dashboard
2. Copie seu **Cloud Name** (fica no topo)

### Passo 3: Upload das imagens
Você tem 2 opções:

**Opção A - Upload Manual:**
1. Vá em Media Library
2. Faça upload de todas as imagens de `src/assets/`
3. Mantenha a mesma estrutura de pastas

**Opção B - Upload via API:**
```bash
# Instalar CLI
npm install -g cloudinary-cli

# Fazer login
cloudinary config

# Upload em lote
cloudinary upload_dir src/assets/ --folder="sweet-life-animes"
```

### Passo 4: Configurar no projeto
1. Copie `src/lib/cdnConfig.example.ts` para `src/lib/cdnConfig.ts`
2. Edite o arquivo:
```typescript
import { configureCDN } from './imageOptimization';

export const initCDN = () => {
  configureCDN('cloudinary', {
    cloudName: 'SEU-CLOUD-NAME-AQUI'
  });
};
```

3. Importe no `src/main.tsx`:
```typescript
import { initCDN } from './lib/cdnConfig';

initCDN(); // Adicione antes do ReactDOM.createRoot
```

### Passo 5: Atualizar paths das imagens
Depois de configurado, o sistema automaticamente otimizará as imagens!

---

## 📋 Opção 2: Imgix

### Passo 1: Criar conta
1. Acesse: https://imgix.com/pricing (30 dias grátis)
2. Crie uma conta

### Passo 2: Criar Source
1. No dashboard, clique em "Sources"
2. Escolha "Web Folder" ou "S3 Bucket"
3. Configure o origin das suas imagens

### Passo 3: Obter Domain
1. Após criar o source, copie o domínio
2. Formato: `seu-projeto.imgix.net`

### Passo 4: Configurar no projeto
```typescript
import { configureCDN } from './imageOptimization';

export const initCDN = () => {
  configureCDN('imgix', {
    domain: 'seu-projeto.imgix.net'
  });
};
```

---

## 🔧 Como Usar no Código

### Otimizar uma imagem:
```typescript
import { getOptimizedImageUrl } from '@/lib/imageOptimization';

const MyComponent = () => {
  const imageUrl = getOptimizedImageUrl('/assets/artwork.jpg', {
    width: 800,
    height: 600,
    quality: 80,
    format: 'auto' // Serve WebP para browsers compatíveis
  });

  return <img src={imageUrl} alt="Artwork" />;
};
```

### Gerar srcset responsivo:
```typescript
import { generateSrcSet } from '@/lib/imageOptimization';

const srcSet = generateSrcSet('/assets/hero.jpg');
// Gera: "url-640w, url-750w, url-1080w, url-1920w"

<img 
  srcSet={srcSet}
  sizes="(max-width: 768px) 100vw, 50vw"
  src="/assets/hero.jpg"
  alt="Hero"
/>
```

---

## 📊 Métricas Esperadas

### Sem CDN (Atual)
- Tamanho médio de imagem: ~500KB
- Tempo de carregamento: ~2s (3G)
- LCP: ~2.5s

### Com CDN + Otimização
- Tamanho médio de imagem: ~150KB (-70%)
- Tempo de carregamento: ~600ms (3G)
- LCP: ~1.2s (-52%)

---

## 🧪 Testar Performance

### Antes:
1. Abra DevTools → Network
2. Limpe o cache (Ctrl+Shift+Del)
3. Recarregue a página
4. Veja o tamanho total de imagens

### Depois de configurar CDN:
1. Limpe o cache novamente
2. Recarregue a página
3. Compare os tamanhos!

---

## 🆘 Troubleshooting

### Imagens não carregam após configurar CDN:
1. Verifique se o Cloud Name/Domain está correto
2. Confirme que as imagens foram uploaded
3. Abra o console e veja se há erros CORS
4. Teste a URL diretamente no navegador

### Service Worker não funciona:
1. Certifique-se de estar usando HTTPS (ou localhost)
2. Verifique se `service-worker.js` está na pasta `public/`
3. Limpe o cache e recarregue
4. Veja erros em DevTools → Console

### Performance ainda lenta:
1. Verifique se está usando format='auto'
2. Confirme que quality não está muito alto (80 é ideal)
3. Use dimensões específicas (width/height)
4. Ative HTTP/2 no seu hosting

---

## 📝 Checklist de Implementação

- [x] Service Worker instalado
- [x] Sistema de CDN configurado
- [x] Prefetch de próxima batch ativo
- [ ] CDN escolhido (Cloudinary ou Imgix)
- [ ] Imagens uploaded para CDN
- [ ] cdnConfig.ts criado e configurado
- [ ] initCDN() chamado no main.tsx
- [ ] Testado em produção

---

## 💡 Dicas Extras

1. **Use quality: 80** - Imperceptível ao olho, mas 50% menor
2. **Format: 'auto'** - Serve WebP/AVIF automaticamente
3. **Lazy loading** - Já implementado na gallery!
4. **Responsive images** - Use srcSet para diferentes tamanhos
5. **Preload hero images** - Para LCP mais rápido

---

## 🎯 Próximos Passos Opcionais

1. **HTTP/3 & QUIC** - Configure no hosting para velocidade máxima
2. **Edge Functions** - Para personalização por região
3. **A/B Testing** - Teste diferentes qualidades de imagem
4. **Analytics** - Track Core Web Vitals
5. **Budget Monitoring** - Configure alertas de uso do CDN

---

Dúvidas? Consulte a documentação oficial:
- Cloudinary: https://cloudinary.com/documentation
- Imgix: https://docs.imgix.com/
- Service Workers: https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
# Chez Théo — Restaurant Fusion à Saint-Donat-sur-l'Herbasse

Site vitrine one-page pour **Chez Théo**, restaurant de cuisine fusion franco-asiatique, Maître Restaurateur à Saint-Donat-sur-l'Herbasse (Drôme).

## 🌐 Liens

- **Production** : [chez-theo.vercel.app](https://chez-theo.vercel.app)
- **Facebook** : [facebook.com/cheztheo](https://www.facebook.com/cheztheo/)
- **Tripadvisor** : [Chez Théo sur Tripadvisor](https://www.tripadvisor.fr/Restaurant_Review-g1647160-d7306289-Reviews-Chez_Theo-Saint_Donat_sur_l_Herbasse_Drome_Auvergne_Rhone_Alpes.html)

## 📋 Infos client

| Info | Détail |
|------|--------|
| **Nom** | Chez Théo |
| **Type** | Restaurant fusion français-asiatique |
| **Label** | Maître Restaurateur |
| **Adresse** | 42 Avenue Georges Bert, 26260 Saint-Donat-sur-l'Herbasse |
| **Téléphone** | 04 75 45 22 04 |
| **Email** | cheztheo26@gmail.com |
| **Capacité** | 50 couverts + terrasse |
| **Prix moyen** | 20–30 €/pers |
| **Note Google** | 4.5/5 |
| **Horaires** | Lun–Jeu 12h–14h30 · Ven–Sam 12h–14h30 + 19h30–22h30 · Dim fermé |
| **Services** | Sur place, terrasse, traiteur, plats à emporter |

## 🎨 Design

- **Concept** : "Saveurs du Monde" — palette chaude terracotta/épices sur fond clair
- **Palette** : Crème (#FAF7F2) · Terracotta (#C25B3A) · Épice dorée (#D4973B) · Vert herbe (#5B7553)
- **Typographie** : Instrument Serif (display, italique) + DM Sans (body)
- **Layout** : Hero split horizontal, sections asymétriques staggered, galerie bento grid, carte en onglets

## 🛠 Stack technique

- **Framework** : Next.js 16
- **Styling** : Tailwind CSS 4
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Auth** : NextAuth v5 (Credentials + JWT)
- **Base de données** : MongoDB Atlas (Mongoose)
- **Images** : Cloudinary (cloud: dxcudyuno, folder: seikyo/chez-theo/)
- **Déploiement** : Vercel

## 📝 CMS inline

Le client peut modifier directement sur le site (après login) :

- ✅ Tous les textes (titres, descriptions, citations, FAQ)
- ✅ Toutes les images (hero, galerie, break, traiteur)
- ✅ Logo (upload dans le header)
- ✅ Boutons (texte + URL)
- ✅ Menu/carte (ajouter, supprimer, modifier plats/prix/descriptions par catégorie)
- ✅ Infos contact (adresse, téléphone, email)
- ✅ Horaires
- ✅ Liens sociaux (Facebook, Tripadvisor)

### Accès admin

- **URL** : `/login`
- **Identifiants** : `admin` / `ChezTheo2026!`

## 🗂 Structure

```
app/
├── globals.css          # Palette & variables CSS
├── layout.tsx           # Fonts, metadata, schema.org
├── page.tsx             # Page principale (toutes les sections)
├── login/page.tsx       # Page de connexion admin
├── api/
│   ├── auth/[...nextauth]/route.ts
│   ├── content/route.ts # API CMS (GET/PUT/DELETE)
│   └── upload/route.ts  # Upload Cloudinary
components/
├── Navbar.tsx           # Navigation fixe
├── Footer.tsx           # Pied de page
├── ui/FadeIn.tsx        # Animation fade-in au scroll
└── cms/
    ├── CMSProvider.tsx   # Context CMS global
    ├── EditableText.tsx  # Texte inline éditable
    ├── EditableImage.tsx # Image éditable (fill + small)
    ├── EditableButton.tsx# Bouton éditable (texte + URL)
    ├── EditableList.tsx  # Liste dynamique (menu)
    ├── EditableIcon.tsx  # Icône éditable
    ├── IconPicker.tsx    # Sélecteur d'icônes Lucide
    ├── AdminBar.tsx      # Barre admin fixe
    └── SessionProvider.tsx
lib/
├── auth.ts              # Config NextAuth
├── mongodb.ts           # Connexion Mongoose
└── cloudinary.ts        # Config Cloudinary
```

## 🔧 Variables d'environnement

```env
MONGODB_URI=mongodb+srv://...
SITE_ID=chez-theo
NEXTAUTH_SECRET=...
NEXTAUTH_URL=https://chez-theo.vercel.app
CLOUDINARY_CLOUD_NAME=dxcudyuno
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
```

## 🚀 Développement

```bash
npm install
npm run dev -- -p 3002
```

---

Créé par [Seikyo](https://seikyo.fr) — 2026

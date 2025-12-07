/
├── index.html
├── package.json
├── vite.config.ts
│
└── src/
    ├── App.tsx
    ├── main.tsx
    │
    ├── assets/
    │   ├── images/
    │   ├── icons/
    │   └── svg/
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Footer.tsx
    │   │   └── Navigation.tsx
    │   │
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   └── DalekTooltip.tsx
    │   │
    │   ├── background/
    │   │   └── HexCanvas.tsx
    │   │
    │   └── interactive/
    │       ├── SkillMatcher.tsx
    │       └── PortfolioGrid.tsx
    │
    ├── pages/
    │   ├── Home.tsx
    │   ├── Skills.tsx
    │   ├── Portfolio.tsx
    │   └── Contact.tsx
    │
    ├── styles/
    │   ├── global.scss
    │   ├── variables.scss   (colors, spacing, fonts)
    │   ├── themes/
    │   │   ├── dark.scss
    │   │   └── light.scss
    │   └── components/      (component-scoped styles if needed)
    │
    ├── data/
    │   ├── skills.json
    │   ├── jobs.json
    │   ├── portfolio.json
    │   └── translations/   (if multilingual later)
    │
    ├── hooks/
    │   ├── useHexBackground.ts
    │   ├── useTheme.ts
    │   └── useDalekEye.ts
    │
    └── utils/
        ├── hexMath.ts
        ├── colorUtils.ts
        └── random.ts
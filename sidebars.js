// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  defaultSidebar: [
    {
      type: 'doc',
      id: 'quick-start',
      label: 'Quick Start',
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      link: {
        type: 'generated-index',
        slug: 'features',
      },
      items: [
        'features/declaration',
        'features/generation',
        'features/validation',
        'features/substitution',
      ],
    },
    {
      type: 'category',
      label: 'Types',
      collapsed: false,
      link: {
        type: 'generated-index',
        slug: 'types',
      },
      items: [
        'types/scalar-types',
        'types/container-types',
        'types/type-aliases',
        {
          type: 'category',
          label: 'Custom Types',
          collapsed: true,
          items: [
            {
              type: 'doc',
              id: 'types/custom-types/foundations',
              label: 'Part 1. Foundations',
            },
            {
              type: 'doc',
              id: 'types/custom-types/value-substitution',
              label: 'Part 2. Value Substitution',
            },
          ]
        }
      ],
    },
    {
      type: 'doc',
      id: 'migration-v1-to-v2',
      label: 'Migration (v1 to v2)',
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: true,
      link: {
        type: 'generated-index',
        slug: 'integrations',
      },
      items: [
        'integrations/jj',
        'integrations/pytest',
        'integrations/aiohttp',
      ],
    },
  ],

};

export default sidebars;

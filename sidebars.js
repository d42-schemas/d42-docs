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
      type: 'doc',
      id: 'types',
      label: 'Types',
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
        'integrations/vedro',
        'integrations/jj',
        'integrations/pytest',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Advanced',
    //   collapsed: true,
    //   link: {
    //     type: 'generated-index',
    //     slug: 'advanced',
    //   },
    //   items: [
    //     'advanced/custom-types',
    //   ],
    // },
  ],

};

module.exports = sidebars;

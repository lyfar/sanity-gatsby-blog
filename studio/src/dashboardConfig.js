export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbf2ef799a34ec46b692c6a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4bbv3zjq',
                  apiId: '3adce41a-7070-4917-86f7-e8c7c26c70b3'
                },
                {
                  buildHookId: '5fbf2ef799a34ecb2d692aa9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6wjdisq8',
                  apiId: '81ce20fa-2b47-4ee6-95d3-bdf80a5e3143'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lyfar/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6wjdisq8.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

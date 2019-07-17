export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d2f534da05b5001818fc1de',
                  title: 'Sanity Studio',
                  name: 'tcg-sanity-studio',
                  apiId: '227d7dbc-d3b7-4687-bdb3-d04d244edb77'
                },
                {
                  buildHookId: '5d2f534d3902ac01819b6e58',
                  title: 'Landing pages Website',
                  name: 'tcg-sanity',
                  apiId: '7e85ec5b-2233-449f-a2fb-e2524983438b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crispinread/tcg-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://tcg-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}

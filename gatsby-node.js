import path from 'path'

export async function CreateBlogPages({ graphql, actions }) {
    const template = path.resolve('./src/templates/blog.js')
    const { data } = await graphql(`
        query {
            blogs: allSanityPost {
                nodes {
                    title
                    slug {
                        current
                    }
                }
            }
        }
    `)
    const blogs = data.blogs.nodes
    blogs.forEach((single) => {
        console.log(`creating a page for ${single.title}`)
        actions.createPage({
            path: `/blog/${single.slug.current}`,
            component: template,
            context: {
                title: single.title,
                slug: single.slug.current,
            },
        })
    })
}

export async function createPages(paramas) {
    //* Create page functions
    await Promise.all([CreateBlogPages(paramas)])
}

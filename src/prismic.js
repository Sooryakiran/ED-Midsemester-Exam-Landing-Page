import * as prismic from '@prismicio/client'

// Fill in your repository name
export const repositoryName = 'sooryakiran'
const endpoint = prismic.getEndpoint(repositoryName)

export const client = prismic.createClient(endpoint, {
})
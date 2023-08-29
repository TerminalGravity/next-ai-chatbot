import OpenAI from 'openai'
 
const resource = 'openai-adr1'
const model = 'asdf2'
 
const apiKey = process.env.AZURE_OPENAI_API_KEY
if (!apiKey) {
  throw new Error('AZURE_OPENAI_API_KEY is missing from the environment.')
}
 
// Azure OpenAI requires a custom baseURL, api-version query param, and api-key header.
const openai = new OpenAI({
  apiKey,
  baseURL: `https://${resource}.openai.azure.com/openai/deployments/${model}`,
  defaultQuery: { 'api-version': '2023-06-01-preview' },
  defaultHeaders: { 'api-key': apiKey }
})
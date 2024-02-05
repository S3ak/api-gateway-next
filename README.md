# api-gateway-next-e0lquu0al-seak.vercel.app

## Links

- [Production deploy](api-gateway-next-e0lquu0al-seak.vercel.app)
- [Staging deploy](TODO) #TODO
- [API URL](https://api-gateway-next-e0lquu0al-seak.vercel.app/api)
- [Docs]()

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Testing

The provided code is a test suite for the GET /api/products endpoint of an API. It's written using Cypress, a popular end-to-end testing framework.

The test suite begins by defining a constant ENV_URL which is set to the value of the BASE_API_URL environment variable. If this environment variable is not set, it defaults to http://localhost:3000/api.

The describe block is used to group related tests. In this case, it groups the tests for the GET /api/products endpoint.

Inside the describe block, there's a single test case defined using the it function. This test case is checking the behavior when a GET request is made to the /api/products endpoint.

The cy.request function is used to send a GET request to the /api/products endpoint. When the request is complete, it expects the response to have a status of 200, indicating success.

The test then checks the message property of the response body. It expects this to be "Success: Resource has been successfully retrieved. | Invoices".

Next, it checks the data property of the response body. It expects this to be an array with a length of 5. It also checks the properties of the first item in the data array. It expects the name property to be "Delba de Oliveira", the amount property to be 8945, and the customer_id, date, id, and status properties to be undefined.

Finally, it checks the count property of the response body. It expects this to be 5, indicating that there are 5 items in the data array.

The comment // FIXME: Flakey test suggests that this test may sometimes fail unexpectedly and needs to be fixed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

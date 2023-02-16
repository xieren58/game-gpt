// import { steamAuth } from '~~/server/utils/steamAuth'

// export default defineEventHandler(async () => {
//   try {
//     const { getRedirectUrl } = steamAuth()

//     const redirectUrl = await getRedirectUrl()

//     return {
//       redirectUrl,
//     }
//   }
//   catch (error) {
//     throw new Error(error as string)
//   }
// })

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { steamAuth } from '@/utils/steamAuth'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  redirectUrl: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const { getRedirectUrl } = steamAuth()
    const redirectUrl = await getRedirectUrl()

    res.status(200).json({ redirectUrl })
  } catch (error) {
    res.status(500)
  }
}

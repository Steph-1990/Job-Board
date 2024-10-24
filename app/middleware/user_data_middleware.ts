// import type { HttpContext } from '@adonisjs/core/http'
// import type { NextFn } from '@adonisjs/core/types/http'

// export default class UserDataMiddleware {
//   public async handle({ auth, inertia }: HttpContext, next: NextFn) {
//     try {
//       const user = await auth.use('web').authenticate()
//       // Partager l'utilisateur authentifié
//       inertia.share({
//         user: user || null, // Utilisateur ou null si non authentifié
//       })
//     } catch {
//       // Si l'utilisateur n'est pas authentifié, on partage null
//       inertia.share({
//         user: null, // Assurer la compatibilité avec null
//       })
//     }

//     await next()
//   }
// }

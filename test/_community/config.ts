import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'node:url'
import path from 'path'

import { buildConfigWithDefaults } from '../buildConfigWithDefaults.js'
import { devUser } from '../credentials.js'
import { MediaCollection } from './collections/Media/index.js'
import { PostsCollection, postsSlug } from './collections/Posts/index.js'
import { MenuGlobal } from './globals/Menu/index.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [PostsCollection, MediaCollection],
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({}),
  globals: [
    // ...add more globals here
    MenuGlobal,
  ],
  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    for (let index = 0; index < 4000; index++) {
      await payload.create({
        collection: postsSlug,
        data: {
          title: `example post ${index}`,
          transactionData: `{
	"data": {
		"attributes": {
			"campaign_lifetime_support_cents": 0,
			"currently_entitled_amount_cents": 0,
			"email": "leventsaatci@hotmail.com",
			"full_name": "derLevent",
			"is_follower": false,
			"is_free_trial": false,
			"last_charge_date": null,
			"last_charge_status": null,
			"lifetime_support_cents": 0,
			"next_charge_date": null,
			"note": "",
			"patron_status": null,
			"pledge_cadence": null,
			"pledge_relationship_start": "2024-11-26T09:40:20.396+00:00",
			"will_pay_amount_cents": 0
		},
		"id": "f008aab3-9fa5-44ed-ae38-310db542fe47",
		"relationships": {
			"address": {
				"data": null
			},
			"campaign": {
				"data": {
					"id": "5475370",
					"type": "campaign"
				},
				"links": {
					"related": "https://www.patreon.com/api/oauth2/v2/campaigns/5475370"
				}
			},
			"currently_entitled_tiers": {
				"data": []
			},
			"user": {
				"data": {
					"id": "83790117",
					"type": "user"
				},
				"links": {
					"related": "https://www.patreon.com/api/oauth2/v2/user/83790117"
				}
			}
		},
		"type": "member"
	},
	"included": [
		{
			"attributes": {
				"created_at": "2020-10-11T14:56:51.000+00:00",
				"creation_name": "creating Characters, Miniatures, Stories and Illustrations",
				"discord_server_id": "1047216599351971852",
				"google_analytics_id": null,
				"has_rss": false,
				"has_sent_rss_notify": false,
				"image_small_url": "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5475370/191f6259a7a74a8ba24b5fb52e3d17cb/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/19.jpg?token-time=1733270400&token-hash=iqBelDzKiIesVHlbqxuO5-9kgKkSVnoSxD7RMDz1q_A%3D",
				"image_url": "https://c10.patreonusercontent.com/4/patreon-media/p/campaign/5475370/191f6259a7a74a8ba24b5fb52e3d17cb/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/19.jpg?token-time=1733270400&token-hash=iqBelDzKiIesVHlbqxuO5-9kgKkSVnoSxD7RMDz1q_A%3D",
				"is_charged_immediately": true,
				"is_monthly": true,
				"is_nsfw": false,
				"main_video_embed": "",
				"main_video_url": "",
				"one_liner": null,
				"patron_count": 2212,
				"pay_per_name": "month",
				"pledge_url": "/checkout/nerikson",
				"published_at": "2022-02-11T00:28:53.000+00:00",
				"rss_artwork_url": null,
				"rss_feed_title": null,
				"summary": "<h2 style=\"\"><strong>Monthly release</strong></h2><blockquote style=\"\"><p style=\"text-align:center;\"><em>(The release goes live on the 2nd of the month and lasts until 30-31st of the month)</em></p></blockquote><p style=\"\"></p><p style=\"\"></p><p style=\"\"></p><iframe width=\"492\" height=\"162\" src=\"https://www.youtube.com/embed/GnaA87vh79w\" allowfullscreen=\"true\" frameborder=\"0\"></iframe><iframe width=\"494\" height=\"209\" src=\"https://www.youtube.com/embed/XXNxmxjkyaU\" allowfullscreen=\"true\" frameborder=\"0\"></iframe><p style=\"\"></p><p style=\"\">September release includes:</p><ul><li><p style=\"\"><a href=\"https://youtu.be/GnaA87vh79w\" rel=\"noopener noreferrer nofollow\">Meabh, The Wild Ranger, </a>140mm/75mm scale collectible model</p></li><li><p style=\"\"><a href=\"https://youtu.be/XXNxmxjkyaU\" rel=\"noopener noreferrer nofollow\">The Four Seasons: Autumn,</a> 140mm collectible diorama</p></li><li><p style=\"\"><a href=\"https://www.myminifactory.com/object/3d-print-lara-bust-presupported-404985\" rel=\"noopener noreferrer nofollow\">Lara Bust</a>, Bust model</p></li><li><p style=\"\"><strong>25% Discount</strong> on the whole Store</p></li></ul><p style=\"\"></p><h1 style=\"\"><strong>Subscription</strong></h1><p style=\"\">By subscribing you get access to my monthly release.</p><p style=\"\">I am releasing <strong>2 characters a month</strong> (creating intricate and detailed character takes a lot of time!), but when I can I will be <strong>adding additional</strong> gifts to subscribers.</p><p style=\"\"></p><ol><li><p style=\"\">I will be sharing files with <em>Google Drive during the month</em>.</p></li><li><p style=\"\">By the end of the month, I will close access to Drive and create a <strong>user group on MyMiniFactory.</strong> The models you've received that month will be available for you there after the month is completed.</p></li></ol><p style=\"\"></p><h2 style=\"\">Welcome Pack</h2><p style=\"\">By subscribing you will also get access to my&nbsp; <a href=\"https://www.myminifactory.com/object/3d-print-vampire-elf-warlock-presupported-195631\" rel=\"noopener noreferrer nofollow\">WELCOME PACK</a></p><p style=\"\"></p><h2 style=\"\">Discount</h2><p style=\"\">By Subscribing you will also get 25% discount for my&nbsp;<a href=\"https://www.myminifactory.com/users/nerikson\" rel=\"noopener noreferrer nofollow\">Store</a></p><p style=\"\"></p><h1 style=\"\"><strong>Previous releases</strong></h1><p style=\"\">All of my models from previous months and releases are available on:</p><ul><li><p style=\"\"><a href=\"https://www.myminifactory.com/users/nerikson\" rel=\"noopener noreferrer nofollow\">Myminifactory</a></p></li><li><p style=\"\"><a href=\"https://cults3d.com/en/users/nerikson/creations\" rel=\"noopener noreferrer nofollow\">Cults</a></p></li></ul><p style=\"\"></p><h1 style=\"\"><strong>License</strong></h1><p style=\"\">All tiers (except for Commercial) are granted the non-commercial right to use my STL files for 3D printing only for <strong>Personal Use ONLY.</strong></p><p style=\"\">You are not allowed to redistribute my files (original or modified) in any way.</p><p style=\"\">This includes STL and all derivatives (images, prints, videos, etc)</p><p style=\"\"></p><p style=\"\"><strong>About me</strong></p><p style=\"\"><em>I'm Ernest, I'm a 3D Artist and Sculptor from Italy. I like working on detailed, carefully crafted miniatures, more towards sculpture and with less focus on mass production.</em></p>",
				"thanks_embed": null,
				"thanks_msg": "<p style=\"text-align:center;\">Greetings and welcome to my Patreon! 😁</p><p style=\"\"></p><p style=\"\"><img src=\"https://drive.google.com/uc?id=11T106Oojn7MpjcRzLdfvSIZrKxkQo27R\" title=\"\"></p><p style=\"\"></p><p style=\"\"><img src=\"https://drive.google.com/uc?id=11X29t44IXAI5-khcuyO6AFiV99sevJUv\" title=\"\"></p><p style=\"\"><img src=\"https://drive.google.com/uc?id=11YtL3oa4hpGIHP_cSIYbSQOoyInbpYD9\" title=\"\"></p><p style=\"\"><img src=\"https://drive.google.com/uc?id=11dSi7vpAfEH5RQ_GbMR5SkUkUv05dSWM\" title=\"\"></p><p style=\"\"><img src=\"https://drive.google.com/uc?id=1iptIGDkQK8RNOpEVpFFKg61RSRkxUl1k\" title=\"\"></p><p style=\"\"></p><p style=\"\">If you have any questions or issues, please don't hesitate to drop me a message. I will try to reply as soon as I can.💪 I am also open to suggestions and improvements to my Patreon, so feel free to drop a line in the comments or send me a message directly.</p><p style=\"\"></p><p style=\"\">Thank you again and welcome 😁</p>",
				"thanks_video_url": null,
				"url": "https://www.patreon.com/nerikson",
				"vanity": "nerikson"
			},
			"id": "5475370",
			"type": "campaign"
		},
		{
			"attributes": {
				"about": null,
				"created": "2022-12-04T21:07:44.000+00:00",
				"first_name": "derLevent",
				"full_name": "derLevent",
				"hide_pledges": true,
				"image_url": "https://c8.patreon.com/3/200/83790117",
				"is_creator": false,
				"last_name": "",
				"like_count": 2,
				"thumb_url": "https://c8.patreon.com/3/200/83790117",
				"url": "https://www.patreon.com/user?u=83790117",
				"vanity": null
			},
			"id": "83790117",
			"type": "user"
		}
	],
	"links": {
		"self": "https://www.patreon.com/api/oauth2/v2/members/f008aab3-9fa5-44ed-ae38-310db542fe47"
	}
}`,
        },
      })
    }
  },
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})

import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: 50,
	},
	headers: {
		"X-RapidAPI-Key": "53aa72baa1msh528e851baf9fd92p178a4fjsnc64fa1b6724e",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};
const mockApiResponse = {
	kind: "youtube#searchListResponse",
	nextPageToken: "CAUQAA",
	regionCode: "DE",
	pageInfo: {
		totalResults: 1000000,
		resultsPerPage: 5,
	},
	items: [
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "RK7-oa8_DkQ",
			},
			snippet: {
				publishedAt: "2018-02-14T14:00:53Z",
				channelId: "UCNqFDjYTexJDET3rPDrmJKg",
				title: "Daya - New (Lyrics)",
				description:
					"Daya - New (Lyrics) ⏬ Download / Stream: http://smarturl.it/NewDaya Turn on notifications to stay updated with new uploads!",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/RK7-oa8_DkQ/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/RK7-oa8_DkQ/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/RK7-oa8_DkQ/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "7clouds",
				liveBroadcastContent: "none",
				publishTime: "2018-02-14T14:00:53Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "9yfMplVU0m0",
			},
			snippet: {
				publishedAt: "2017-10-12T16:00:00Z",
				channelId: "UCwIgYX20BdoezlsQ0kYX47g",
				title: "Daya - New",
				description:
					"Get “New”, the brand new single from Daya: http://smarturl.it/NewDaya Connect with Daya: Website: ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/9yfMplVU0m0/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/9yfMplVU0m0/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/9yfMplVU0m0/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "DayaVEVO",
				liveBroadcastContent: "none",
				publishTime: "2017-10-12T16:00:00Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "UxXY_hR_wzo",
			},
			snippet: {
				publishedAt: "2024-08-16T00:00:08Z",
				channelId: "UC6-BgjsBa5R3PZQ_kZ8hKPg",
				title: "LISA - NEW WOMAN feat. Rosalía (Official Music Video)",
				description:
					"LISA feat. Rosalía “New Woman” - https://lisa.lnk.to/NewWoman Follow LISA: http://www.instagram.com/lalalalisa_m ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/UxXY_hR_wzo/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/UxXY_hR_wzo/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/UxXY_hR_wzo/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "LLOUD Official",
				liveBroadcastContent: "none",
				publishTime: "2024-08-16T00:00:08Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "NCclOXqCxA8",
			},
			snippet: {
				publishedAt: "2017-10-13T14:46:17Z",
				channelId: "UCj4mJaB6K3a6eCw1xIQ2jsA",
				title: "Daya - New (Lyrics / Lyrics Video)",
				description:
					"Daya - New (Lyrics / Lyrics Video) Stream/Download http://smarturl.it/NewDaya Follow Daya Website: ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/NCclOXqCxA8/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/NCclOXqCxA8/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/NCclOXqCxA8/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "NewMelody",
				liveBroadcastContent: "none",
				publishTime: "2017-10-13T14:46:17Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "k2qgadSvNyU",
			},
			snippet: {
				publishedAt: "2017-07-07T09:00:05Z",
				channelId: "UC-J-KZfRV8c13fOCkhXdLiQ",
				title: "Dua Lipa - New Rules (Official Music Video)",
				description:
					"The official music video for Dua Lipa - New Rules Taken from her self-titled debut studio album released in 2017, which featured ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/k2qgadSvNyU/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/k2qgadSvNyU/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/k2qgadSvNyU/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Dua Lipa",
				liveBroadcastContent: "none",
				publishTime: "2017-07-07T09:00:05Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#playlist",
				playlistId: "PL3-sRm8xAzY9gpXTMGVHJWy_FMD67NBed",
			},
			snippet: {
				publishedAt: "2018-12-08T18:09:26Z",
				channelId: "UC1XC2O_MgSQk_GC2S25rP-w",
				title:
					"New Songs 2024 - New Music Playlist - New Music &amp; Latest Hits",
				description:
					"New Songs 2024 - New Music Playlist - New Music & Latest Hits Every week, we update our playlist with the latest hits. new music ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/0M1UCYRZAtM/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/0M1UCYRZAtM/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/0M1UCYRZAtM/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "AT Charts",
				liveBroadcastContent: "none",
				publishTime: "2018-12-08T18:09:26Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "nA3TK5vzQ8k",
			},
			snippet: {
				publishedAt: "2022-07-08T04:00:32Z",
				channelId: "UC909aQs3mq4cNNY9mG3KuBw",
				title: "Ken Carson - New (Official Audio)",
				description:
					"Stream 'XTENDED' Here: http://KenCarson.lnk.to/XTENDED https://shop.kencarson.xyz Follow Ken Carson: ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/nA3TK5vzQ8k/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/nA3TK5vzQ8k/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/nA3TK5vzQ8k/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "KenCarsonVEVO",
				liveBroadcastContent: "none",
				publishTime: "2022-07-08T04:00:32Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "mCmrpWa1KoQ",
			},
			snippet: {
				publishedAt: "2024-09-13T14:36:55Z",
				channelId: "UCupvZG-5ko_eiXAupbDfxWw",
				title:
					"New poll reveals how voters are viewing Trump and Harris after the debate",
				description:
					"CNN senior data reporter Harry Enten analyzes a new national poll indicating that Vice President Kamala Harris is leading former ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/mCmrpWa1KoQ/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/mCmrpWa1KoQ/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/mCmrpWa1KoQ/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "CNN",
				liveBroadcastContent: "none",
				publishTime: "2024-09-13T14:36:55Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "2p9m7txw2TA",
			},
			snippet: {
				publishedAt: "2024-09-08T23:00:02Z",
				channelId: "UC8MzgBGB-6UjVac7SHH2bHQ",
				title: "New 2024 Election Map Based on The Latest Polls",
				description: "New 2024 Election Map © 2024 Arkive Productions LLC.",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/2p9m7txw2TA/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/2p9m7txw2TA/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/2p9m7txw2TA/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Arkive",
				liveBroadcastContent: "none",
				publishTime: "2024-09-08T23:00:02Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "bCqnOn23LWE",
			},
			snippet: {
				publishedAt: "2024-09-09T19:37:11Z",
				channelId: "UCE_M8A5yxnLfW0KghEeajjw",
				title: "Introducing the all-new AirPods 4 | Apple",
				description:
					"Powered by the H2 chip, the new AirPods 4 feature an updated fit for all-day comfort and a totally transformed audio experience.",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/bCqnOn23LWE/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/bCqnOn23LWE/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/bCqnOn23LWE/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Apple",
				liveBroadcastContent: "none",
				publishTime: "2024-09-09T19:37:11Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "jnzyFHgyJds",
			},
			snippet: {
				publishedAt: "2024-08-21T12:15:06Z",
				channelId: "UC16niRr50-MSBwiO3YDb3RA",
				title: "New EU visa rules to be introduced | BBC News",
				description:
					"The EU is planning to introduce a €7 (£6) EU visa waiver for some non-EU citizens by summer 2025. Under new rules, visitors ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/jnzyFHgyJds/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/jnzyFHgyJds/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/jnzyFHgyJds/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "BBC News",
				liveBroadcastContent: "none",
				publishTime: "2024-08-21T12:15:06Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "idqfhoa4qu4",
			},
			snippet: {
				publishedAt: "2024-09-12T13:11:18Z",
				channelId: "UCFqyJFbsV-uEcosvNhg0PaQ",
				title:
					"VENOM: THE LAST DANCE - New Hindi Trailer | In Cinemas October 25",
				description:
					"With you to the end. Witness the epic conclusion in #Venom: The Last Dance - exclusively in cinemas on October 25. Releasing in ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/idqfhoa4qu4/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/idqfhoa4qu4/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/idqfhoa4qu4/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Sony Pictures India",
				liveBroadcastContent: "none",
				publishTime: "2024-09-12T13:11:18Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "99Er2gelNIQ",
			},
			snippet: {
				publishedAt: "2013-12-13T22:34:21Z",
				channelId: "UCsIYXvzoO-9NALEFv_ZMTsQ",
				title: "Paul McCartney - New",
				description:
					"\"New\" Don't look at me It's way too soon to see What's gonna be Don't look at me All my life I never knew What I could be, what I ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/99Er2gelNIQ/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/99Er2gelNIQ/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/99Er2gelNIQ/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "MrMatu1997",
				liveBroadcastContent: "none",
				publishTime: "2013-12-13T22:34:21Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "P9eMvXBXtFE",
			},
			snippet: {
				publishedAt: "2024-09-09T13:40:03Z",
				channelId: "UCupvZG-5ko_eiXAupbDfxWw",
				title: "New polls show change in Harris-Trump race in Pennsylvania",
				description:
					"CNN senior data reporter Harry Enten highlights a new trend in the polls for the presidential race between Vice President Kamala ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/P9eMvXBXtFE/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/P9eMvXBXtFE/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/P9eMvXBXtFE/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "CNN",
				liveBroadcastContent: "none",
				publishTime: "2024-09-09T13:40:03Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "MLfON0ZKu8c",
			},
			snippet: {
				publishedAt: "2024-08-16T00:24:53Z",
				channelId: "UCi0LydWaEUy3Vx8flL29ebQ",
				title: "LISA - NEW WOMAN (Lyrics) ft. Rosalía",
				description:
					"Stream LISA - NEW WOMAN ft. Rosalía: https://lisa.lnk.to/NewWoman listen to the best tiktok playlist: ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/MLfON0ZKu8c/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/MLfON0ZKu8c/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/MLfON0ZKu8c/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "SyrebralVibes",
				liveBroadcastContent: "none",
				publishTime: "2024-08-16T00:24:53Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "uxmguZS_KZo",
			},
			snippet: {
				publishedAt: "2022-06-26T04:00:18Z",
				channelId: "UCMgrC8XJh6H4ZcZlrwuWq3A",
				title: "Tye Tribbett - New",
				description:
					"Official Music Video for “New” by Tye Tribbett Get the song here: https://TyeTribbett.lnk.to/AllThingsNewID Subscribe to Tye's ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/uxmguZS_KZo/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/uxmguZS_KZo/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/uxmguZS_KZo/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "TyeTribbettVEVO",
				liveBroadcastContent: "none",
				publishTime: "2022-06-26T04:00:18Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "wSbjQmUINAQ",
			},
			snippet: {
				publishedAt: "2024-09-12T07:00:08Z",
				channelId: "UCOrE-2VgEOJ9LTNLYu5LeEw",
				title: "Leo Ki New Car | Thok Di Nayi Gaddi Leo ne  | Anant Rastogi",
				description:
					"If you liked the video ,share it with your friends and family and do subscribe the channel Comment what kind of video you want ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/wSbjQmUINAQ/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/wSbjQmUINAQ/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/wSbjQmUINAQ/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Anant Rastogi",
				liveBroadcastContent: "none",
				publishTime: "2024-09-12T07:00:08Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#playlist",
				playlistId: "PLOY_2V03-NJpOGp6ZqTy_WU8Uq0D5krnG",
			},
			snippet: {
				publishedAt: "2022-09-16T23:19:00Z",
				channelId: "UCVRm2Ho8cL3lvWDyp2ayuFw",
				title: "New Heights",
				description: "",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/81beBPicSUM/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/81beBPicSUM/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/81beBPicSUM/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "New Heights",
				liveBroadcastContent: "none",
				publishTime: "2022-09-16T23:19:00Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "Q3IdDymP11E",
			},
			snippet: {
				publishedAt: "2024-06-14T04:00:14Z",
				channelId: "UCgT01FILdWB9BsXBXKjpQ7A",
				title: "Don Toliver - NEW DROP [Official Audio]",
				description:
					"Don Toliver - NEW DROP 'HARDSTONE PSYCHO', OUT NOW! ‍☠️  ‍☠️  ‍☠️ STREAM/DL HERE: ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/Q3IdDymP11E/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/Q3IdDymP11E/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/Q3IdDymP11E/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Don Toliver",
				liveBroadcastContent: "none",
				publishTime: "2024-06-14T04:00:14Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "wvonXLxadHI",
			},
			snippet: {
				publishedAt: "2024-08-31T03:00:45Z",
				channelId: "UCy6kyFxaMqGtpE3pQTflK8A",
				title:
					"New Rule: The Big Terrible Thing | Real Time with Bill Maher (HBO)",
				description:
					"Doctors were responsible for the deaths of Mathew Perry and more rock stars than twin-engine planes. The medical industrial ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/wvonXLxadHI/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/wvonXLxadHI/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/wvonXLxadHI/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Real Time with Bill Maher",
				liveBroadcastContent: "none",
				publishTime: "2024-08-31T03:00:45Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "BkbbP0ozyMs",
			},
			snippet: {
				publishedAt: "2013-09-16T07:30:58Z",
				channelId: "UCvGnJy9RnXX0kGSnDPKCZzQ",
				title:
					"Paul McCartney &#39;New&#39; (Lyric Video) - &#39;NEW&#39; Album Out Now!",
				description:
					"Get 'NEW': From Amazon: http://smarturl.it/PMc_New_Album_Amzn From Google Play: http://g.co/PlayPaulMcCartney From ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/BkbbP0ozyMs/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/BkbbP0ozyMs/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/BkbbP0ozyMs/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "PAUL McCARTNEY",
				liveBroadcastContent: "none",
				publishTime: "2013-09-16T07:30:58Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "-OJjj_5mt2c",
			},
			snippet: {
				publishedAt: "2024-09-05T23:20:40Z",
				channelId: "UCJ12taByUPFxljXM77KOhkg",
				title: "LINKIN’ PARK - Bleed it Out - New Singer Emily Armstrong",
				description: "",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/-OJjj_5mt2c/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/-OJjj_5mt2c/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/-OJjj_5mt2c/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "surfmiami",
				liveBroadcastContent: "none",
				publishTime: "2024-09-05T23:20:40Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "0fIYLuhtWWs",
			},
			snippet: {
				publishedAt: "2020-11-23T23:48:33Z",
				channelId: "UCx554p1Bu_Mp1q0H_bEtZ1Q",
				title:
					"The Croods: A New Age Clip - Showing Scars (2020) | Fandango Family",
				description:
					"Check out the official clip for The Croods: A New Age starring Emma Stone! ▻ Sign up for a Fandango FanALERT: A New Age: ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/0fIYLuhtWWs/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/0fIYLuhtWWs/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/0fIYLuhtWWs/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Rotten Tomatoes Family",
				liveBroadcastContent: "none",
				publishTime: "2020-11-23T23:48:33Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "s3s9T-SVaAU",
			},
			snippet: {
				publishedAt: "2024-09-14T03:00:45Z",
				channelId: "UCy6kyFxaMqGtpE3pQTflK8A",
				title:
					"New Rule: Everlasting Elections | Real Time with Bill Maher (HBO)",
				description:
					"Now that we've shown that it's possible to begin a campaign for President just three months before the election, let's always do ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/s3s9T-SVaAU/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/s3s9T-SVaAU/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/s3s9T-SVaAU/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Real Time with Bill Maher",
				liveBroadcastContent: "none",
				publishTime: "2024-09-14T03:00:45Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "WDlTm3XiGn8",
			},
			snippet: {
				publishedAt: "2022-06-03T04:00:09Z",
				channelId: "UCMgrC8XJh6H4ZcZlrwuWq3A",
				title: "Tye Tribbett - New (Lyric Video)",
				description:
					"Official Lyric Video for “New” by Tye Tribbett Get the song here: https://TyeTribbett.lnk.to/AllThingsNewID Subscribe to Tye's ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/WDlTm3XiGn8/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/WDlTm3XiGn8/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/WDlTm3XiGn8/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "TyeTribbettVEVO",
				liveBroadcastContent: "none",
				publishTime: "2022-06-03T04:00:09Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "7Am9TCA3WrA",
			},
			snippet: {
				publishedAt: "2024-04-01T14:00:08Z",
				channelId: "UCW8Q9LBGGBgK6a-u0C0h95A",
				title: "【MV】FRUITS ZIPPER「NEW KAWAII」",
				description:
					"FRUITS ZIPPER 1st Album「NEW KAWAII」 先行配信曲 NEW KAWAII 配信日：2024年3月22日（金） ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/7Am9TCA3WrA/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/7Am9TCA3WrA/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/7Am9TCA3WrA/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "KAWAII LAB.",
				liveBroadcastContent: "none",
				publishTime: "2024-04-01T14:00:08Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "hR1-ihzff3I",
			},
			snippet: {
				publishedAt: "2024-08-14T07:01:00Z",
				channelId: "UCz97F7dMxBNOfGYu3rx8aCw",
				title: "KRAVEN - New Trailer (HD)",
				description:
					"Who's next? #KravenTheHunter is only in theaters this December. Learn More: https://www.kravenmovie.com/ Subscribe for more ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/hR1-ihzff3I/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/hR1-ihzff3I/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/hR1-ihzff3I/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Sony Pictures Entertainment",
				liveBroadcastContent: "none",
				publishTime: "2024-08-14T07:01:00Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "EXe1M9Ym5zA",
			},
			snippet: {
				publishedAt: "2024-07-19T14:11:13Z",
				channelId: "UCKQcazUy4R2p4nBWsxwQJyg",
				title:
					"New Footage of Trump’s Shooter and Blackrock’s Jew CEO Goes Viral",
				description:
					"New Footage of Trump's Shooter and Blackrock's Jew CEO Goes Viral.",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/EXe1M9Ym5zA/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/EXe1M9Ym5zA/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/EXe1M9Ym5zA/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "King Luxury",
				liveBroadcastContent: "none",
				publishTime: "2024-07-19T14:11:13Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "Wehsz38P74g",
			},
			snippet: {
				publishedAt: "2021-12-15T11:55:25Z",
				channelId: "UC6n8I1UDTKP1IWjQMg6_TwA",
				title: "Why New York’s Billionaires’ Row Is Half Empty",
				description:
					"Manhattan's skyscrapers aren't really built for people anymore. For more by The B1M subscribe now - http://ow.ly/GxW7y Full story ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/Wehsz38P74g/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/Wehsz38P74g/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/Wehsz38P74g/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "The B1M",
				liveBroadcastContent: "none",
				publishTime: "2021-12-15T11:55:25Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "70_2DcsIncY",
			},
			snippet: {
				publishedAt: "2018-12-11T14:30:07Z",
				channelId: "UC7HwVMVG9bqONCbDqh4RM9Q",
				title: "Incomprensible Amor (en vivo) - Vientos de Gloria | New Wine",
				description:
					"'Vientos de Gloria' Disponible en su distribuidor digital preferido. iTunes, Amazon Music, Google Play, Deezer, YouTube, Spotify y ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/70_2DcsIncY/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/70_2DcsIncY/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/70_2DcsIncY/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "New Wine",
				liveBroadcastContent: "none",
				publishTime: "2018-12-11T14:30:07Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "sNl8rODXIBk",
			},
			snippet: {
				publishedAt: "2009-06-12T15:05:04Z",
				channelId: "UCoookXUzPciGrEZEXmh4Jjg",
				title:
					"Sesame Street: &quot;A New Way to Walk&quot; with Destiny&#39;s Child",
				description:
					"Make up your own fun moves as Destiny's Child sings \"A New Way to Walk\" with Grover, Elmo & Zoe. -- If you're watching videos ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/sNl8rODXIBk/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/sNl8rODXIBk/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/sNl8rODXIBk/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Sesame Street",
				liveBroadcastContent: "none",
				publishTime: "2009-06-12T15:05:04Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "P7GP7aUg3Nk",
			},
			snippet: {
				publishedAt: "2021-07-23T17:00:11Z",
				channelId: "UCIfcyaWxjySIXHQO_Yt26rQ",
				title:
					"Charity Gayle - New Name Written Down In Glory (feat. David Gentiles) [Live]",
				description:
					"New Name Written Down In Glory” by Charity Gayle (feat. David Gentiles) [Live] | Written by Charity Gayle, David Gentiles, Denita ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/P7GP7aUg3Nk/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/P7GP7aUg3Nk/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/P7GP7aUg3Nk/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Charity Gayle",
				liveBroadcastContent: "none",
				publishTime: "2021-07-23T17:00:11Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#playlist",
				playlistId: "PLjwbNj9NASKPUGpj75sZxb6dKOHZeOYnK",
			},
			snippet: {
				publishedAt: "2017-07-07T12:19:34Z",
				channelId: "UCs54HY_bDb_tncyy1ron4Ww",
				title: "New Reggae Songs 2024 ♫ Latest Reggae Music Playlist 2024",
				description:
					"New Reggae Songs 2024 ♫ Latest Reggae Music Playlist 2024 If you liked this playlist, we recommend you also listen to these ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/fBQLNlRqdO8/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/fBQLNlRqdO8/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/fBQLNlRqdO8/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "MEDLEY.TRACKS",
				liveBroadcastContent: "none",
				publishTime: "2017-07-07T12:19:34Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "HUT81VaUeyY",
			},
			snippet: {
				publishedAt: "2023-02-06T09:00:11Z",
				channelId: "UCc-itdQHxLvUlPrDxIiSJrA",
				title: "INI｜&#39;New Day&#39; Performance Video",
				description:
					"DIGITAL SINGLE 'New Day' 配信中：https://lnk.to/NewDay_INI 〈INI OFFICIAL SNS〉 [YouTube] ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/HUT81VaUeyY/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/HUT81VaUeyY/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/HUT81VaUeyY/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "INI",
				liveBroadcastContent: "none",
				publishTime: "2023-02-06T09:00:11Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "tUJGC0ucnpM",
			},
			snippet: {
				publishedAt: "2024-09-13T11:47:57Z",
				channelId: "UCaXkIU1QidjPwiAYu6GcHjg",
				title: "Harris widens her lead over Trump in new 2024 polling",
				description:
					"VP Kamala Harris is widening her lead against former President Donald Trump, according to new Morning Consult polling. Harris ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/tUJGC0ucnpM/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/tUJGC0ucnpM/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/tUJGC0ucnpM/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "MSNBC",
				liveBroadcastContent: "none",
				publishTime: "2024-09-13T11:47:57Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "2PH7dK6SLC8",
			},
			snippet: {
				publishedAt: "2018-05-10T17:00:01Z",
				channelId: "UC9KhB07HSEtWISy_LFWwHzw",
				title: "John Mayer - New Light (Official Audio)",
				description:
					"Spotify: http://radi.al/NewLightSpotify Apple: http://radi.al/NewLightApple Amazon: http://radi.al/NewLightAMZ John Mayer “New ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/2PH7dK6SLC8/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/2PH7dK6SLC8/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/2PH7dK6SLC8/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "johnmayerVEVO",
				liveBroadcastContent: "none",
				publishTime: "2018-05-10T17:00:01Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "WkkgJkNVOGY",
			},
			snippet: {
				publishedAt: "2019-03-22T10:00:06Z",
				channelId: "UCoookXUzPciGrEZEXmh4Jjg",
				title: "Elmo&#39;s New Band | Sesame Street Full Episode",
				description:
					"In this full episode, Elmo is left to find new members for his singing band when Rosita, Zoe, and Grover are unable to make their ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/WkkgJkNVOGY/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/WkkgJkNVOGY/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/WkkgJkNVOGY/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Sesame Street",
				liveBroadcastContent: "none",
				publishTime: "2019-03-22T10:00:06Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "Srns7NiO278",
			},
			snippet: {
				publishedAt: "2016-01-19T18:00:00Z",
				channelId: "UCsjrSi7xMkKPk4gcLSjFKbA",
				title: "A$AP Ferg - New Level (Official Video) ft. Future",
				description:
					"Official music video for ”New Level” by A$AP Ferg feat. Future Listen to A$AP Ferg: https://ASAPFerg.lnk.to/listenYD Watch more ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/Srns7NiO278/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/Srns7NiO278/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/Srns7NiO278/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "asapfergVEVO",
				liveBroadcastContent: "none",
				publishTime: "2016-01-19T18:00:00Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "mHIkfPC2hjU",
			},
			snippet: {
				publishedAt: "2023-03-02T21:00:06Z",
				channelId: "UCNt6J380Yfecr77iXoqqx4g",
				title: "zxcursed - new era",
				description:
					"zxcursed - new era Слушать «new era» на всех площадках: https://li.sten.to/zxcursednewera vk: https://vk.com/zxcursed ins: ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/mHIkfPC2hjU/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/mHIkfPC2hjU/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/mHIkfPC2hjU/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "zxcursed",
				liveBroadcastContent: "none",
				publishTime: "2023-03-02T21:00:06Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "Ldx29DRx-XY",
			},
			snippet: {
				publishedAt: "2023-04-02T23:00:10Z",
				channelId: "UC3cZDC8xy6CVFEwZ1ihAkbQ",
				title: "Scar Lip  - This Is New York (Official music video )",
				description:
					"Spotify link : Scar Lip https://open.spotify.com/track/0LH1V0ZodNOfM7jnqyO9S5 Follow Scar Lip Instagram.com/scar_lip Directed ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/Ldx29DRx-XY/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/Ldx29DRx-XY/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/Ldx29DRx-XY/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "SCAR",
				liveBroadcastContent: "none",
				publishTime: "2023-04-02T23:00:10Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "8cAkGmzUqOY",
			},
			snippet: {
				publishedAt: "2024-09-12T13:00:43Z",
				channelId: "UCFqyJFbsV-uEcosvNhg0PaQ",
				title:
					"VENOM: THE LAST DANCE - New English Trailer | In Cinemas October 25",
				description:
					"With you to the end. Witness the epic conclusion in #Venom: The Last Dance - exclusively in cinemas on October 25. Releasing in ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/8cAkGmzUqOY/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/8cAkGmzUqOY/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/8cAkGmzUqOY/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Sony Pictures India",
				liveBroadcastContent: "none",
				publishTime: "2024-09-12T13:00:43Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "O3DPVlynUM0",
			},
			snippet: {
				publishedAt: "2023-02-27T10:46:40Z",
				channelId: "UC_vt34wimdCzdkrzVejwX9g",
				title:
					"🔴GEO NEWS LIVE: Latest Pakistan News Live 24-Hour &amp; Breaking Headlines - Today News  #pakistannews",
				description:
					"GeoNewsLive #pakistannews #geonews #geonewslive #nationalassemblysession #live #livenews #latestnews #updatenews ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/O3DPVlynUM0/default_live.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/O3DPVlynUM0/mqdefault_live.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/O3DPVlynUM0/hqdefault_live.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Geo News",
				liveBroadcastContent: "live",
				publishTime: "2023-02-27T10:46:40Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "xYjFxFFdyyk",
			},
			snippet: {
				publishedAt: "2018-10-26T10:32:25Z",
				channelId: "UCkvoz5gnEk53HolBefnReGQ",
				title: "A Whole New World",
				description:
					"Provided to YouTube by Universal Music Group A Whole New World · Lea Salonga · Brad Kane · Disney Aladdin ℗ 1992 Buena ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/xYjFxFFdyyk/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/xYjFxFFdyyk/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/xYjFxFFdyyk/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Lea Salonga - Topic",
				liveBroadcastContent: "none",
				publishTime: "2018-10-26T10:32:25Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "6ZKDdzqN6B4",
			},
			snippet: {
				publishedAt: "2023-02-16T10:04:39Z",
				channelId: "UCMvNj-EdziRVn5BIwJV6iZg",
				title: "N.E.W.",
				description:
					"Provided to YouTube by Universal Music Group N.E.W. · Hiromi · Tomoaki Baba · Shun Ishiwaka BLUE GIANT ℗ A Universal ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/6ZKDdzqN6B4/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/6ZKDdzqN6B4/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/6ZKDdzqN6B4/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Hiromi - Topic",
				liveBroadcastContent: "none",
				publishTime: "2023-02-16T10:04:39Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "1ozGKlOzEVc",
			},
			snippet: {
				publishedAt: "2018-04-06T04:10:39Z",
				channelId: "UC4q12NoPNySbVqwpw4iO5Vg",
				title: "New Wine - Hillsong Worship",
				description:
					'The official live worship music video for "New Wine" by Hillsong Worship, from the album "There Is More", recorded live in Sydney, ...',
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/1ozGKlOzEVc/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/1ozGKlOzEVc/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/1ozGKlOzEVc/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Hillsong Worship",
				liveBroadcastContent: "none",
				publishTime: "2018-04-06T04:10:39Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "0TrKXehB0pg",
			},
			snippet: {
				publishedAt: "2019-03-08T05:00:00Z",
				channelId: "UCPicf9BU7OLXU9I3C-ywTvA",
				title: "Danny Gokey - New Day (Lyric Video)",
				description:
					'Official lyric video for "New Day" by Danny Gokey Get the song here: https://dannygokey.lnk.to/HaventSeenItYetYD Subscribe to ...',
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/0TrKXehB0pg/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/0TrKXehB0pg/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/0TrKXehB0pg/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "DannyGokeyVEVO",
				liveBroadcastContent: "none",
				publishTime: "2019-03-08T05:00:00Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "2w8KUgIkAu8",
			},
			snippet: {
				publishedAt: "2019-05-17T04:00:06Z",
				channelId: "UCo1DYcm1IZ9v3UPkpiAcgtg",
				title: "NEW MAGIC WAND",
				description:
					"Provided to YouTube by Columbia NEW MAGIC WAND · Tyler, The Creator IGOR ℗ 2019 Columbia Records, a Division of Sony ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/2w8KUgIkAu8/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/2w8KUgIkAu8/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/2w8KUgIkAu8/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Tyler, The Creator - Topic",
				liveBroadcastContent: "none",
				publishTime: "2019-05-17T04:00:06Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "RM0wgDe6AlA",
			},
			snippet: {
				publishedAt: "2018-11-15T07:00:04Z",
				channelId: "UCk8GzjMOrta8yxDcKfylJYw",
				title: "Diana Pretend Play with new Toy Cars",
				description:
					"Diana and Roma pretend to play with toy cars. Roma sells toy cars. Diana wants to buy a new beautiful car, but she has no money ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/RM0wgDe6AlA/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/RM0wgDe6AlA/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/RM0wgDe6AlA/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "✿ Kids Diana Show",
				liveBroadcastContent: "none",
				publishTime: "2018-11-15T07:00:04Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "MQDfrFCrafA",
			},
			snippet: {
				publishedAt: "2024-08-21T04:30:30Z",
				channelId: "UCOsyDsO5tIt-VZ1iwjdQmew",
				title:
					"Fly Karke | Sabba Ft. Pranjal Dahiya &amp; Jasmeen Akhtar | Latest Punjabi Songs 2024 | Speed Records",
				description:
					"Credits Song : Fly Karke Singer/Lyrics : Sabba Composer : Sabba Featuring : Pranjal Dahiya Female Vocal : Jasmeen Akhtar ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/MQDfrFCrafA/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/MQDfrFCrafA/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/MQDfrFCrafA/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Speed Records",
				liveBroadcastContent: "none",
				publishTime: "2024-08-21T04:30:30Z",
			},
		},
		{
			kind: "youtube#searchResult",
			id: {
				kind: "youtube#video",
				videoId: "mqqx_ehU_WU",
			},
			snippet: {
				publishedAt: "2019-03-16T12:00:08Z",
				channelId: "UCpZ88DWlKW0H_AYDaUZptcw",
				title: "Who&#39;s the NEW NINJA KID? Ninja Kidz TV",
				description:
					"We have a NEW Ninja Kid on Ninja Kidz TV! We are teaching him awesome Ninja Skills. We also do a fun obstacle course race ...",
				thumbnails: {
					default: {
						url: "https://i.ytimg.com/vi/mqqx_ehU_WU/default.jpg",
						width: 120,
						height: 90,
					},
					medium: {
						url: "https://i.ytimg.com/vi/mqqx_ehU_WU/mqdefault.jpg",
						width: 320,
						height: 180,
					},
					high: {
						url: "https://i.ytimg.com/vi/mqqx_ehU_WU/hqdefault.jpg",
						width: 480,
						height: 360,
					},
				},
				channelTitle: "Ninja Kidz TV",
				liveBroadcastContent: "none",
				publishTime: "2019-03-16T12:00:08Z",
			},
		},
	],
};
// const mockApiVideo = {
// 	"kind": "youtube#searchListResponse",
// 	"nextPageToken": "",
// 	"pageInfo": {
// 	  "totalResults": 150,
// 	  "resultsPerPage": 20
// 	},
// 	"items": [
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "hbcGx4MGUMg"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-07-21T00:00:00Z",
// 		  "channelId": "UC6-BgjsBa5R3PZQ_kZ8hKPg",
// 		  "title": "LISA - ROCKSTAR (Official Music Video)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/hbcGx4MGUMg/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/hbcGx4MGUMg/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/hbcGx4MGUMg/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "LLOUD Official",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-07-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "oTCzkJ3QgU0"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-08-21T00:00:00Z",
// 		  "channelId": "UCJW5UDaDqN66Iw1sbtXlEMA",
// 		  "title": "Editor Reacts to Creativity in LISA 'NEW WOMAN' ft. Rosalía",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/oTCzkJ3QgU0/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/oTCzkJ3QgU0/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/oTCzkJ3QgU0/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "Jordan Orme",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-08-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "DNwoQODmZUE"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-09-12T00:00:00Z",
// 		  "channelId": "UCxAICW_LdkfFYwTqTHHE0vg",
// 		  "title": "LISA - "New Woman" / "Rockstar" | 2024 VMAs",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/DNwoQODmZUE/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/DNwoQODmZUE/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/DNwoQODmZUE/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "MTV",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-09-12T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "KEG7b851Ric"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-08-24T00:00:00Z",
// 		  "channelId": "UCPKWE1H6xhxwPlqUlKgHb_w",
// 		  "title": "Sabrina Carpenter - Taste (Official Video)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/KEG7b851Ric/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/KEG7b851Ric/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/KEG7b851Ric/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "Sabrina Carpenter",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-08-24T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "K9_VFxzCuQ0"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2021-09-21T00:00:00Z",
// 		  "channelId": "UCOmHUn--16B90oW2L6FRR3A",
// 		  "title": "ROSÉ - 'Gone' M/V",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/K9_VFxzCuQ0/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/K9_VFxzCuQ0/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/K9_VFxzCuQ0/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "BLACKPINK",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2021-09-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "kNUlN86wVsU"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-08-31T00:00:00Z",
// 		  "channelId": "UC6-BgjsBa5R3PZQ_kZ8hKPg",
// 		  "title": "LISA - NEW WOMAN feat. Rosalía (M/V Behind The Scenes)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/kNUlN86wVsU/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/kNUlN86wVsU/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/kNUlN86wVsU/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "LLOUD Official",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-08-31T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "k2qgadSvNyU"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2017-09-21T00:00:00Z",
// 		  "channelId": "UC-J-KZfRV8c13fOCkhXdLiQ",
// 		  "title": "Dua Lipa - New Rules (Official Music Video)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/k2qgadSvNyU/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/k2qgadSvNyU/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/k2qgadSvNyU/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "Dua Lipa",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2017-09-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "phuiiNCxRMg"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-05-21T00:00:00Z",
// 		  "channelId": "UCEf_Bc-KVd7onSeifS3py9g",
// 		  "title": "aespa 에스파 'Supernova' MV",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/phuiiNCxRMg/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/phuiiNCxRMg/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/phuiiNCxRMg/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "SMTOWN",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-05-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "BY_XwvKogC8"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-06-21T00:00:00Z",
// 		  "channelId": "UCiGm_E4ZwYSHV3bcW1pnSeQ",
// 		  "title": "Billie Eilish - CHIHIRO (Official Music Video)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/BY_XwvKogC8/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/BY_XwvKogC8/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/BY_XwvKogC8/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "Billie Eilish",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-06-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "NFnAuiklEug"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2023-09-21T00:00:00Z",
// 		  "channelId": "UCg8ZzloDPTrOiGztK0C9txQ",
// 		  "title": "TAEYANG - 'Shoong! (feat. LISA of BLACKPINK)' PERFORMANCE VIDEO",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/NFnAuiklEug/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/NFnAuiklEug/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/NFnAuiklEug/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "THEBLACKLABEL",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2023-09-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "4-iVJZcGbPA"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-08-21T00:00:00Z",
// 		  "channelId": "UCBVJR7RJBplVmGzSHobl9lw",
// 		  "title": "LISA BLACKPINK - 'PLAYLIST SONGS'",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/4-iVJZcGbPA/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://
//   "url": "https://i.ytimg.com/vi/4-iVJZcGbPA/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/4-iVJZcGbPA/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "KEPSONG",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-08-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "POe9SOEKotk"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2022-09-21T00:00:00Z",
// 		  "channelId": "UCOmHUn--16B90oW2L6FRR3A",
// 		  "title": "BLACKPINK - 'Shut Down' M/V",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/POe9SOEKotk/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/POe9SOEKotk/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/POe9SOEKotk/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "BLACKPINK",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2022-09-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "eVli-tstM5E"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-04-21T00:00:00Z",
// 		  "channelId": "UCPKWE1H6xhxwPlqUlKgHb_w",
// 		  "title": "Sabrina Carpenter - Espresso (Official Video)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/eVli-tstM5E/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/eVli-tstM5E/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/eVli-tstM5E/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "Sabrina Carpenter",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-04-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "Av9DvtlJ9_M"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-07-21T00:00:00Z",
// 		  "channelId": "UC3IZKseVpdzPSBaWxBxundA",
// 		  "title": "지민 (Jimin) 'Who' Official MV",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/Av9DvtlJ9_M/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/Av9DvtlJ9_M/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/Av9DvtlJ9_M/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "HYBE LABELS",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-07-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "oUZttxRcPZw"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-06-21T00:00:00Z",
// 		  "channelId": "UCaO6TYtlC8U5ttz62hTrZgg",
// 		  "title": "NAYEON "ABCD" M/V",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/oUZttxRcPZw/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/oUZttxRcPZw/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/oUZttxRcPZw/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "JYP Entertainment",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-06-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "5sT20edl02I"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-05-21T00:00:00Z",
// 		  "channelId": "UC12HMtO5MYph9dCZZ7yygng",
// 		  "title": "XG - WOKE UP (Official Music Video)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/5sT20edl02I/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/5sT20edl02I/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/5sT20edl02I/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "XG",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-05-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "qVqFuokjRMc"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-07-21T00:00:00Z",
// 		  "channelId": "UCONnf7g7QfOqzM3etLECtUA",
// 		  "title": "SEVDALIZA - ALIBI FT. PABLLO VITTAR & YSEULT (OFFICIAL MUSIC VIDEO)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/qVqFuokjRMc/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/qVqFuokjRMc/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/qVqFuokjRMc/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "Sevdaliza",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-07-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "z9tifvQSu-g"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2023-09-21T00:00:00Z",
// 		  "channelId": "UCOmHUn--16B90oW2L6FRR3A",
// 		  "title": "BLACKPINK - 'Typa Girl' Live at Coachella 2023",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/z9tifvQSu-g/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/z9tifvQSu-g/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/z9tifvQSu-g/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "BLACKPINK",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2023-09-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "C-u5WLJ9Yk4"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2010-09-21T00:00:00Z",
// 		  "channelId": "UCgffc95YDBlkGrBAJUHUmXQ",
// 		  "title": "Britney Spears - ...Baby One More Time (Official Video)",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/C-u5WLJ9Yk4/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/C-u5WLJ9Yk4/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/C-u5WLJ9Yk4/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "Britney Spears",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2010-09-21T00:00:00Z"
// 		}
// 	  },
// 	  {
// 		"kind": "youtube#searchResult",
// 		"id": {
// 		  "kind": "youtube#video",
// 		  "videoId": "0dio-sUXvv4"
// 		},
// 		"snippet": {
// 		  "publishedAt": "2024-08-21T00:00:00Z",
// 		  "channelId": "UCLgeUOvUYQ1V5-d3F3YaFVw",
// 		  "title": "JENNIE - 'Woman Up' |AI ORIGINAL SONG|",
// 		  "description": "",
// 		  "thumbnails": {
// 			"default": {
// 			  "url": "https://i.ytimg.com/vi/0dio-sUXvv4/default.jpg",
// 			  "width": 120,
// 			  "height": 90
// 			},
// 			"medium": {
// 			  "url": "https://i.ytimg.com/vi/0dio-sUXvv4/mqdefault.jpg",
// 			  "width": 320,
// 			  "height": 180
// 			},
// 			"high": {
// 			  "url": "https://i.ytimg.com/vi/0dio-sUXvv4/hqdefault.jpg",
// 			  "width": 480,
// 			  "height": 360
// 			}
// 		  },
// 		  "channelTitle": "VN ENTERTAINMENT ",
// 		  "liveBroadcastContent": "none",
// 		  "publishTime": "2024-08-21T00:00:00Z"
// 		}
// 	  }
// 	]
//   };

// Use este objeto mockado como resposta da API para testes

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};

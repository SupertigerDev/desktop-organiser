import config from '../config.json'
import { twitchAccessToken, igdb, fields, sort, limit, offset, where } from 'ts-igdb-client';

const twitchSecrets = {
  client_id: config.TWITCH_CLIENT_ID,
  client_secret: config.TWITCH_SECRET,
}

async function main() {
  // generate a twitch access token
  const accessToken = await twitchAccessToken(twitchSecrets);

  // generate an IGDB client with twitch credentials
  const client = igdb(twitchSecrets.client_id, accessToken);

  // build and execute a query
  const { data } = await client.request('games')
      .pipe(
        where('name', "=", "Overwatch"),
        fields(['artworks']),
      ).execute()
      // console.log(data)

      console.log(data[0])


      // const testt = await client.request("artworks").pipe(
      //   where("image_id", "=", data[0].artworks?.[0]!.),
      //   fields(['*']),
      // ).execute()

      // console.log(testt)

}

main()
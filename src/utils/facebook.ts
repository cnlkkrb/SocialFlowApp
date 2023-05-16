export async function sharePostWithPhoto(pageId: any, pageAccessToken: any, url: any, message: any) {
    const res = await fetch(
      `https://graph.facebook.com/${pageId}/photos?url=${url}&message=${message}&access_token=${pageAccessToken}`,
      {method: 'POST'},
    );
    const json = await res.json();
    console.log(json);
    return json;
  }
  
  export async function getLongLivedUserAccessToken(accessToken: string) {
    const res = await fetch(`
          https://graph.facebook.com/v16.0/oauth/access_token?
          grant_type=fb_exchange_token&
          client_id=1406901643443036&
          client_secret=e0bfce92fd3e8a628a2787daf29e7de0&
          fb_exchange_token=${accessToken}`);
    const json = await res.json();
    console.log('long-lived-token', json);
    return json;
  }
  
  export async function getLongLivedPageAccessToken(token: string,userId: string) {
    const accessToken = await getLongLivedUserAccessToken(token);
    const res = await fetch(
      `https://graph.facebook.com/v16.0/10220739380709104/accounts?access_token=${accessToken.access_token}`,
    );
    const json = await res.json();
    console.log('long-lived-page', json);
    return json;
  }
  
  export async function getPages(accessToken: string) {
    try {
      const res = await fetch(
        `https://graph.facebook.com/me/accounts?access_token=${accessToken}`,
      );
      const json = await res.json();
      return json;
    } catch (error) {
      console.log(error);
    }
  }
  
  export async function sharePost(pageAccessToken: any, pageId: any, message: any) {
    const res = await fetch(
      `https://graph.facebook.com/${pageId}/feed?message=${message}&access_token=${pageAccessToken}`,
      {
        method: 'POST',
      },
    );
  
    const json = await res.json();
    console.log(json);
  }
  
  

  /*  document.getElementById("hallet").onclick = () => {
          const pageAccessToken =
            "EAATZCkdCwZB1wBAO0XEYfjtZAW4yjKF2QGUZAcExyj6ZCusCeiKotZBuMis5CWZAK6eU8zwbjZA2JZC5Mda0O6amZCxrMP0yfQ4s7ZAmjsMjlaVFpQeHGavGAGcFm4XUDWg8U7ZAlroHr774uKe2ZBbZAuFToSYWP0HNu5K55iPqlkh6NXbSCbz5GhZCSFU";
          const id = "100426513065072";
          const imgUrl =
            "https://pub-8b49af329fae499aa563997f5d4068a4.r2.dev/generations/be9f16c4-00b8-4682-abdb-72a4dc926d9e-0.png";
          //sharePost(token, id, "Kelebek gibi ucarim ari gibi sokarim")
          sharePostWithPhoto(
            id,
            pageAccessToken,
            imgUrl,
            "Kelebek gibi ucarim ari gibi sokarim"
          );
          //getLongLivedPageAccessToken()
          //getLongLivedUserAccessToken()
        }; */
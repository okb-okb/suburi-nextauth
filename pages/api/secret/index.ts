import { IncomingMessage, ServerResponse } from "http";
import { getSession } from "next-auth/client";

export default async (req: IncomingMessage, res: ServerResponse) => {
  const session = await getSession({ req });

  if (session) {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(
      JSON.stringify({
        content: "秘密のページへようこそ!!",
      })
    );
  } else {
    res.statusCode = 401;
    res.setHeader("Content-type", "application/json");
    res.end(
      JSON.stringify({
        error: "ログインしてください",
      })
    );
  }
};

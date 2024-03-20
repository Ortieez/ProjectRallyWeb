// write a nextjs api route that returns the leaderboard data from supabase using fetch request

import { NextApiRequest, NextApiResponse } from "next";

let apikey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTcxMDU4Nzc2MCwiZXhwIjo0ODY2MjYxMzYwLCJyb2xlIjoic2VydmljZV9yb2xlIn0.7v8aE_zHfPqUaQusNYj5P_nO10hGksoti9C2gcQX2Tg";

import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
const supabaseUrl = "https://supabase-wcs04ok.ortieez.com";
const supabase = createClient(supabaseUrl, apikey);

export default async function GETHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { data, error } = await supabase.from("times").select("*");

    if (error) {
      return NextResponse.json(
        { error: "Internal Server Error" },
        {
          status: 500,
        }
      );
    }

    const transformedData = data.map(({ username, time_driven }) => {
      const minutes = Math.floor(time_driven / 60000);
      const seconds = ((time_driven % 60000) / 1000).toFixed(0);
      const milliseconds = time_driven % 1000;
      return {
        username,
        time_driven: `${minutes}:${seconds}:${milliseconds}`,
      };
    });

    return NextResponse.json(transformedData, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}

export { GETHandler as GET };

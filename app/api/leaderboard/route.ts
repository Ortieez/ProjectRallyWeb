import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const supabaseUrl = "https://supabase-wcs04ok.ortieez.com";
const apikey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTcxMDU4Nzc2MCwiZXhwIjo0ODY2MjYxMzYwLCJyb2xlIjoic2VydmljZV9yb2xlIn0.7v8aE_zHfPqUaQusNYj5P_nO10hGksoti9C2gcQX2Tg"; // Access key from environment variable

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Fetch data from Supabase outside the handler (optional optimization)
    const data = await getLeaderboardData();

    const transformedData = data.map(
      ({
        username,
        time_driven,
      }: {
        username: string;
        time_driven: number;
      }) => {
        const minutes = Math.floor(time_driven / 60000);
        const seconds = ((time_driven % 60000) / 1000).toFixed(0);
        const milliseconds = time_driven % 1000;
        return {
          username,
          time_driven: `${minutes}:${seconds}:${milliseconds}`,
        };
      }
    );

    return NextResponse.json(transformedData, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Helper function to fetch leaderboard data (optional)
async function getLeaderboardData() {
  const { createClient } = require("@supabase/supabase-js");
  const supabase = createClient(supabaseUrl, apikey);

  const { data, error } = await supabase.from("times").select("*");

  if (error) {
    throw error;
  }

  return data;
}

export { handler as GET };

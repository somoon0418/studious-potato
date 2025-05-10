import type { MetaFunction } from "react-router";
import type { Route } from "./+types/daily-leaderboard-page";
import { DateTime } from "luxon";
import { data, isRouteErrorResponse } from "react-router";
import { z } from "zod";

const paramsSchema = z.object({
  year: z.coerce.number(),
  month: z.coerce.number(),
  day: z.coerce.number(),
});

export const loader = ({ params }: Route.LoaderArgs) => {
  const { success, data: parsedData } = paramsSchema.safeParse(params);
  if (!success) {
    throw data(
      {
        error_code: "INVALID_PARAMS",
        message: "Invalid params",
      },
      { status: 400 }
    );
  }
  const date = DateTime.fromObject(parsedData).setZone("Asia/Seoul");
  if (!date.isValid) {
    throw data(
      {
        error_code: "INVALID_DATE",
        message: "Invalid date",
      },
      { status: 400 }
    );
  }
  const today = DateTime.now().setZone("Asia/Seoul").startOf("day");
  if (date > today) {
    throw data(
      {
        error_code: "FUTURE_DATE",
        message: "Future date",
      },
      { status: 400 }
    );
  }
  return {
    year: parsedData.year,
    month: parsedData.month,
    day: parsedData.day,
  };
};
export const meta: MetaFunction = () => {
  return [
    { title: "Daily Leaderboard | WeMake" },
    { name: "description", content: "Top products of the day" },
  ];
};

export default function DailyLeaderboardPage({
  loaderData,
}: Route.ComponentProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        Top Products of {loaderData.year} {loaderData.month} {loaderData.day}
      </h1>
    </div>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        {error.data?.message} / {error.data.error_code}
      </div>
    );
  }
  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return <div>Unknown Error</div>;
}

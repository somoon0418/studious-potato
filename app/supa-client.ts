import { createClient } from "@supabase/supabase-js";
import type { Database } from "database.types";
import type { MergeDeep, SetNonNullable, SetFieldType } from "type-fest";
import { Database as SupabaseDatabase } from "database.types";
type Database = MergeDeep<
  SupabaseDatabase,
  {
    public: {
      Views: {
        community_post_list_view: {
          Row: SetFieldType<
            SetNonNullable<
              SupabaseDatabase["public"]["Views"]["community_post_list_view"]["Row"]
            >,
            "author_avatar",
            string | null
          >;
        };
      };
    };
  }
>;
const client = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export default client;

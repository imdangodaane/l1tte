export interface Article {
  title: string;
  content: string;
  badges: {
    news: boolean,
    event: boolean,
    hot: boolean,
    guide: boolean,
    etc: boolean
  } | string;
  slug: string;
  author: string;
  created_at: string;
  updated_at: string;
  is_archived: boolean;
  banner_url: string;
  on_carousel: boolean;
}

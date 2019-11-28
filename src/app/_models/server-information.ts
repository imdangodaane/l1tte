export class ServerInformation {
  basic_information: {
    episode: string,
    max_level: string,
    max_stats: string,
    max_aspd: string,
    opened_at: string,
    party_share: string,
  };
  rates: {
    base_exp: number,
    job_exp: number,
    item_drop: number,
    card_drop: number,
    miniboss_card_drop: number,
    mvp_card_drop: number,
  };
  features: Array<any>;
  events: Array<any>;
  pvp_pvm: Array<any>;
}
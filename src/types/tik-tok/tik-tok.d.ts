export interface ITikTokResponse {
  code: number
  msg: string
  processed_time: number
  data: {
    ai_dynamic_cover: string
    anchors: null | string
    anchors_extras: string
    author: {
      id: string
      unique_id: string
      nickname: string
      avatar: string
    }
    aweme_id: string
    collect_count: number
    comment_count: number
    commerce_info: {
      adv_promotable: boolean
      auction_ad_invited: boolean
      branded_content_type: number
      with_comment_filter_words: boolean
    }
    commercial_video_info: string
    cover: string
    create_time: number
    digg_count: number
    download_count: number
    duration: number
    hd_size: number
    hdplay: string
    id: string
    is_ad: boolean
    item_comment_settings: number
    music: string
    music_info: {
      id: string
      title: string
      play: string
      cover: string
      author: string
    }
    origin_cover: string
    play: string
    play_count: number
    region: string
    share_count: number
    size: number
    title: string
    wm_size: number
    wmplay: string
  }
}

export interface StyledButtonProps {
  isSelected: boolean
}

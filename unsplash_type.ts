export interface iUnsplash {
    total:       number;
    total_pages: number;
    results:     iResults[];
}

export interface iResults {
    id:                       string;
    created_at:               Date;
    updated_at:               Date;
    promoted_at:              Date;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              string;
    alt_description:          string;
    urls:                     Urls;
    links:                    ResultLinks;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              null;
    topic_submissions:        any;
    user:                     User;
    tags:                     Tag[];
}

export interface ResultLinks {
    self:              string;
    html:              string;
    download:          string;
    download_location: string;
}

export interface Tag {
    type:   string;
    title:  string;
    source: Source;
}

export interface Source {
    ancestry:         Ancestry;
    title:            string;
    subtitle:         string;
    description:      string;
    meta_title:       string;
    meta_description: string;
    cover_photo:      CoverPhoto;
}

export interface Ancestry {
    type:        Category;
    category:    Category;
    subcategory: Category;
}

export interface Category {
    slug:        string;
    pretty_slug: string;
}

export interface CoverPhoto {
    id:                       string;
    created_at:               Date;
    updated_at:               Date;
    promoted_at:              Date;
    width:                    number;
    height:                   number;
    color:                    string;
    blur_hash:                string;
    description:              string;
    alt_description:          string;
    urls:                     Urls;
    links:                    ResultLinks;
    likes:                    number;
    liked_by_user:            boolean;
    current_user_collections: any[];
    sponsorship:              null;
    topic_submissions:        any;
    premium:                  boolean;
    user:                     User;
}

export interface Urls {
    raw:      string;
    full:     string;
    regular:  string;
    small:    string;
    thumb:    string;
    small_s3: string;
}

export interface User {
    id:                 string;
    updated_at:         Date;
    username:           string;
    name:               string;
    first_name:         string;
    last_name:          string;
    twitter_username:   string;
    portfolio_url:      null | string;
    bio:                string;
    location:           string;
    links:              UserLinks;
    profile_image:      ProfileImage;
    instagram_username: string;
    total_collections:  number;
    total_likes:        number;
    total_photos:       number;
    accepted_tos:       boolean;
    for_hire:           boolean;
    social:             Social;
}

export interface UserLinks {
    self:      string;
    html:      string;
    photos:    string;
    likes:     string;
    portfolio: string;
    following: string;
    followers: string;
}

export interface ProfileImage {
    small:  string;
    medium: string;
    large:  string;
}

export interface Social {
    instagram_username: string;
    portfolio_url:      null | string;
    twitter_username:   string;
    paypal_email:       null;
}
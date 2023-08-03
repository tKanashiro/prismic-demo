// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = Block1Slice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Description field in *About*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice>
  /**
   * Meta Description field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: about.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *About*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *About*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: about.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Content for Policy documents
 */
interface PolicyDocumentData {
  /**
   * Description field in *Policy*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: policy.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Policy document from Prismic
 *
 * - **API ID**: `policy`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PolicyDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PolicyDocumentData>,
    "policy",
    Lang
  >;

export type AllDocumentTypes = AboutDocument | PolicyDocument;

/**
 * Default variation for App Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AppSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *App*
 */
type AppSliceVariation = AppSliceDefault;

/**
 * App Shared Slice
 *
 * - **API ID**: `app`
 * - **Description**: App
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AppSlice = prismic.SharedSlice<"app", AppSliceVariation>;

/**
 * Primary content in *Block1 → Primary*
 */
export interface Block1SliceDefaultPrimary {
  /**
   * Title field in *Block1 → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: block1.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *Block1 → Items*
 */
export interface Block1SliceDefaultItem {
  /**
   * Image field in *Block1 → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: block1.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *Block1 → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: block1.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Block1 Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Block1SliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<Block1SliceDefaultPrimary>,
  Simplify<Block1SliceDefaultItem>
>;

/**
 * Slice variation for *Block1*
 */
type Block1SliceVariation = Block1SliceDefault;

/**
 * Block1 Shared Slice
 *
 * - **API ID**: `block1`
 * - **Description**: Block1
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type Block1Slice = prismic.SharedSlice<"block1", Block1SliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataSlicesSlice,
      PolicyDocument,
      PolicyDocumentData,
      AllDocumentTypes,
      AppSlice,
      AppSliceVariation,
      AppSliceDefault,
      Block1Slice,
      Block1SliceVariation,
      Block1SliceDefault,
    };
  }
}

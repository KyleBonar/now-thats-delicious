import * as React from "react";
import { useSauceBySlug } from "../../../../utils/hooks/useSauceBySlug/useSauceBySlug";
import List from "../../../List/List";
import { Link } from "../../../Link/Link";
import { Button } from "../../../Button/Button";

import { ISauce } from "../../../../redux/sauces/types";
import { FlashMessageProps } from "../../../FlashMessage/FlashMessage";

interface ISauceRelatedProps {
  loading: boolean;
  sauce?: ISauce;
  error: FlashMessageProps;
}

const SauceRelated: React.FunctionComponent<ISauceRelatedProps> = props => {
  // defaults
  const _loadingTxt = "loading...";
  const _noRelatedSaucesTxt = "Could not find any related sauces!";
  const _title = "Related Sauces";

  const { loading, sauce, error } = props;

  if (loading) {
    return <p>{_loadingTxt}</p>;
  }

  if (error.isVisible) {
    return <p>{error.text}</p>;
  }

  return (
    <>
      {sauce && sauce.slug && showAppropriateReviewButton(sauce.slug)}

      {!sauce || !sauce._related || sauce._related.length === 0 ? (
        <p>{_noRelatedSaucesTxt}</p>
      ) : (
        <List
          items={sauce._related.map((x, ind) => {
            return {
              link: `/sauce/view?s=${x.slug}`,
              text: x.name,
              id: `${ind}-${x.name}`
            };
          })}
          title={_title}
        />
      )}
    </>
  );

  function showAppropriateReviewButton(slug: string): JSX.Element {
    // Determine which button to return
    // if (doesUserHaveSauceReviewToEdit) {
    //   return (
    //     <Link href={`/review/edit?s=${slug}`}>
    //       <Button displayType="solid">Edit Your Review</Button>
    //     </Link>
    //   );
    // }

    return (
      <Link href={`/review/add?s=${slug}`}>
        <Button displayType="solid">Add Review</Button>
      </Link>
    );
  }
};

export default SauceRelated;

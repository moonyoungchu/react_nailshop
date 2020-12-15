import React from "react";
import ItemReadContainer from "../../containers/item/ItemReadContainer";

import MainLayout from "../../layout/MainLayout";

function ItemReadPage({ match }) {
  const { itemId } = match.params;

  return (
    <MainLayout>
      <ItemReadContainer itemId={itemId} />
    </MainLayout>
  );
}

export default ItemReadPage;

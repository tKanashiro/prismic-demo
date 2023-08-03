/**
 * @typedef {import("@prismicio/client").Content.Block1Slice} Block1Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Block1Slice>} Block1Props
 * @param {Block1Props}
 */
const Block1 = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for block1 (variation: {slice.variation}) Slices
    </section>
  );
};

export default Block1;

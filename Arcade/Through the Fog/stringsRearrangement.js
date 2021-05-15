function stringsRearrangement(inputArray) {
  return inputArray.some((el, currentEl) =>
    checkPair(
      [el],
      inputArray.filter((_, otherEl) => otherEl !== currentEl),
    ),
  );
}

function checkPair(el1, el2) {
  return (
    !el2.length ||
    el2.some(
      (el, index) =>
        checkElements(el1[0], el) &&
        checkPair(
          [el, ...el1],
          el2.filter((_, nextIndex) => nextIndex !== index),
        ),
    )
  );
}

function checkElements(el1, el2) {
  return [...el1].reduce((sum, el, i) => sum + (el !== el2[i]), 0) === 1;
}

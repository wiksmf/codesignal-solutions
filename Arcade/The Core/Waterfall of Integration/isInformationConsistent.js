function isInformationConsistent(evidences) {
  for (let i = 0; i < evidences[0].length; i++) {
    let witness;

    for (let j = 0; j < evidences.length; j++) {
      if (!evidences[j][i]) continue;
      if (!witness) witness = evidences[j][i];
      else if (witness !== evidences[j][i]) return false;
    }
  }

  return true;
}

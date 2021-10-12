function lrc2subRip(lrcLyrics, songLength) {
  const subRip = [];

  for (let i = 0, l = lrcLyrics.length; i < l; ++i) {
    if (i === l - 1)
      subRip.push(
        i + 1 + '',
        calcTime(lrcLyrics[i]) + ' --> ' + songLength + ',000',
        lrcLyrics[i].substring(11),
      );
    else
      subRip.push(
        i + 1 + '',
        calcTime(lrcLyrics[i]) + ' --> ' + calcTime(lrcLyrics[i + 1]),
        lrcLyrics[i].substring(11),
        '',
      );
  }

  return subRip;
}

function calcTime(time) {
  const min = time.substr(1, 2);

  return (
    (min < 60 ? '00:' + min : '01:' + (min % 60 < 10 ? '0' : '') + (min % 60)) +
    ':' +
    time.substr(4, 5).replace('.', ',') +
    '0'
  );
}

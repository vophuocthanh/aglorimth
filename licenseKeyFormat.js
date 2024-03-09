var licenseKeyFormatting = function (s, k) {
  let i = 0;
  let licenseKey = "";

  while (i < s.split("").length) {
    for (let j = 0; j < k; j++) {
      licenseKey = licenseKey + s[j];
    }
    licenseKey = licenseKey + "-";
    i = i + k;
  }
  console.log(licenseKey);
  return licenseKey;
};
licenseKeyFormatting("5F3Z-2e-9-w", 4);

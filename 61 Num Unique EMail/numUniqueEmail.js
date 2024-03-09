var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();
  for (const email of emails) {
    const [local, domain] = email.split("@");
    const modifiedLocal = local.replace(/\./g, "").split("+")[0];
    uniqueEmails.add(modifiedLocal + "@" + domain);
  }
  return uniqueEmails.size;
};

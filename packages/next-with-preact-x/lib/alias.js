const path = require("path");
const moduleAlias = require("module-alias");

module.exports = () => {
  moduleAlias.addAlias("react", "preact/compat");
  moduleAlias.addAlias("react-dom", "preact/compat");

  /*
   * we also need to alias react-ssr-prepass because that accesses
   * forbidden React internals that are not present in preact (boo prepass)
   */
  moduleAlias.addAlias(
    "react-ssr-prepass",
    path.resolve(__dirname, "noopPromise.js")
  );
};

const versioningAttr = "latest_versioning_upgrade";

on("sheet:opened", () => {
  //setAttrs({ latest_versioning_upgrade: 2.5 }); used for testing versioning
  getAttrs([versioningAttr], (v) => {
    versioning(parseFloat(v[versioningAttr]) || 1);
  });
});

const versionTwoFour = () => {
  getAttrs(["halfed"], (values) => {
    if (values.halfed) {
      setAttrs({
        hafted: values.halfed,
      });
    }
  });
};

const versionTwoFive = () => {
  const renameSectionAttrTargetValue = (section, attribute) => {
    getSectionIDs(section, (ids) => {
      const map = ids.map((id) => `${section}_${id}_${attribute}`);

      getAttrs(map, (v) => {
        let update = {};
        map.forEach((e) => {
          const rowId = getReprowid(e);
          update[`${rowId}_target_value`] = v[`${e}`] ? v[`${e}`] : 0;
        });
        setAttrs(update);
      });
    });
  };

  renameSectionAttrTargetValue("repeating_passion", "passion");
  renameSectionAttrTargetValue("repeating_directed-trait", "trait");
  renameSectionAttrTargetValue("repeating_skill", "skill");
};

const versionThreeZero = () => {
  const renameRepeatingSectionName = (section, newName, targetValue) => {
    const attrs = ["name", "target_value", "check"];

    getSectionIDs(section, (ids) => {
      const map = ids.map((id) =>
        [...attrs, targetValue].map((e) => `repeating_${section}_${id}_${e}`)
      );

      map.forEach((e) => {
        getAttrs(e, (v) => {
          const newSection = getRow(newName);
          let update = {};
          Object.entries(v).forEach(([key, value]) => {
            const attr = getReprowAttribute(key);

            if (attr === targetValue) {
              update[`${newSection}_target_value`] = value;
              return;
            }

            update[`${newSection}_${attr}`] = value;
          });
          setAttrs(update);
        });
      });
    });
  };

  renameRepeatingSectionName("passion", "passions", "passion");
  renameRepeatingSectionName("direct-trait", "traits", "trait");
};

const versionTwoFiveTwo = () => {
  getAttrs(["play", "sing"], (v) => {
    setAttrs({
      "play instrument": v.play,
      singing: v.sing,
    });
  });
};

const versionTwoFiveThree = () => {
  const renameSectionAttrTargetValue = (section, attribute) => {
    getSectionIDs(section, (ids) => {
      const map = ids.map((id) => `${section}_${id}_${attribute}`);
      getAttrs(map, (v) => {
        let update = {};
        map.forEach((e) => {
          const rowId = getReprowid(e);
          update[`${rowId}_name`] = v[`${e}`] ? v[`${e}`] : "";
          update[`${rowId}_flag`] = false;
        });
        setAttrs(update);
      });
    });
  };

  renameSectionAttrTargetValue("repeating_equipment", "equipment");
  renameSectionAttrTargetValue("repeating_arms", "equipment");
};

const versioning = async (version) => {
  const updateMessage = (v) =>
    console.log(
      `%c Pendragon 6th Edition is updating to ${v}`,
      "color: orange; font-weight:bold"
    );

  switch (true) {
    case version < 1:
      versioning(1);
      updateMessage(1);
      break;
    case version < 2.4:
      updateMessage(2.4);
      versionTwoFour();
      versioning(2.4);
      break;
    case version < 2.41:
      updateMessage(2.41);
      updateBrawling();
      versioning(2.41);
      break;
    case version < 2.5:
      updateMessage(2.5);
      versionTwoFive();
      versioning(2.5);
      break;
    case version < 2.52:
      updateMessage(2.52);
      versionTwoFiveTwo();
      versioning(2.52);
      break;
    case version < 2.53:
      updateMessage(2.53);
      versionTwoFiveThree();
      versioning(2.53);
      break;
    case version < 3:
      updateMessage(3);
      versionThreeZero();
      versioning(3);
      break;
    default:
      console.log(
        `%c Pendragon 6th Edition is update to date.`,
        "color: green; font-weight:bold"
      );
      setAttrs({ version, [`${versioningAttr}`]: version });
  }
};

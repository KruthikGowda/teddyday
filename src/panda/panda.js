import React, { useState } from "react";
import Modal from "../shared/Modal";
import "./panda.css";

const koalaFacts = {
  0: "Koalas aren’t bears – they’re marsupials!",
  1: "Baby koalas are too cute (this is indeed, a fact).",
  2: "Koalas can be found in southeastern and eastern Australia",
  3: "They have a verysupportive  butt…",
  4: "They’re fussy eaters!",
  5: "‘Koala’ is thought to mean ‘no drink’ in the Australian Aboriginal language",
  6: "Koalas can sleep up to 18 hours a day",
  7: "Koala Chlamydia is a serious disease",
  8: "Koalas are losing their homes to excessive tree-clearing",
  9: "Sadly, koala numbers are on the decline",
  10: "Koalas Have Fingerprints",
  11: "Wild Koala Day Exists ",
  12: "Koalas Don’t Have To Drink (Much) Water",
  13: "Koalas Smell Like Eucalyptus",
  14: "Koalas Are Picky Eaters",
  15: "Koalas Have To Eat A LOT ",
  16: "Koalas Have Some Extra Junk In The Trunk",
  17: "Koalas Are Loners",
  18: "Koalas Have Strong Well-Developed Paws To Climb Trees And Grip Their Food",
  19: "Koalas Are Totally Unique",
  20: "Koalas are found in the eucalyptus forests of eastern Australia. They have grey fur with a cream-coloured chest, and strong, clawed feet, perfect for living in the branches of trees!",
  21: "Cuddly critters, koalas measure about 60cm to 85cm long, and weigh about 14kg.",
  22: "Although you may have heard people call them koala ‘bears’, these awesome animals aren’t bears at all – they are in fact marsupials. A group of mammals, most marsupials have pouches where their newborns develop.",
  23: "When an infant koala – called a joey – is born, it immediately climbs up to its mother’s pouch. Blind and earless, a joey uses its strong sense of touch and smell, as well as natural instinct, to find its way.",
  24: "A joey grows and develops in the pouch for about six months. Once strong enough, the youngster rides around on its mother’s back for a further six months, only using the pouch to feed.",
  25: "Koala’s grow up to become big eaters, shifting up to one kilogram of eucalyptus leaves in a day! They are fussy, too, and will select the most nutritious and tastiest leaves from the trees where they live.",
  26: "These magnificent mammals get their name form an Aboriginal* term meaning, ‘no drink’. It’s believed this is because koalas get almost all their moisture from the leaves they eat, and rarely drink water.",
  27: "Enjoy having a snooze? Well so do our furry friends! Koalas don’t have much energy and, when not feasting on leaves, they spend their time dozing in the branches. Believe it or not, they can sleep for up to 18 hours a day!",
  28: "Although these beautiful creatures are protected by law, and not classed as an endangered species, their habitat is under threat. Sadly, around 80% of koala habitat has been lost to human homes, drought and bushfires.",
  29: "The Koalas closet relative is the wombat.",
  30: "Yes, they do smell like a big fuzzy cough sweet.",
};

export default function PandaImage() {
  const [modal, setModal] = useState(false);
  const [facts, setFacts] = useState("");

  const onShowModal = () => {
    setModal(true);
    setFacts(koalaFacts[Math.floor(Math.random() * 31)]);
  };

  const onHideModal = () => {
    setModal(false);
    setFacts("");
  };

  return (
    <div>
      <Modal show={modal} handleClose={onHideModal}>
        <p>{facts}</p>
      </Modal>
      <div className="box-panda">
        <div className="head-panda">
          <div className="head-copy-panda" />
          <div className="ear-left-panda">
            <div className="inner-ear-panda" />
          </div>

          <div className="ear-right-panda">
            <div className="inner-ear-panda" />
          </div>

          <div className="eye-left-panda">
            <div className="pupil-panda" />
          </div>

          <div className="eye-right-panda">
            <div className="pupil-panda" />
          </div>

          <div className="noseKoala-panda" onClick={onShowModal} />

          <div className="hair-left-panda" />
          <div className="hair-right-panda" />
        </div>
      </div>
    </div>
  );
}

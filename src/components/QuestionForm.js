import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import "../index.css";

// icons
import LooksOneRoundedIcon from "@mui/icons-material/LooksOneRounded"; // bir
import LooksTwoRoundedIcon from "@mui/icons-material/LooksTwoRounded"; // iki
import Looks3RoundedIcon from "@mui/icons-material/Looks3Rounded"; // üç
import ThreeKPlusRoundedIcon from "@mui/icons-material/ThreeKPlusRounded"; // üç ve daha fazlası

function Alert(props) {
  return;
}

const QuestionForm = ({
  question,
  answer,
  step,
  disableNext,
  disablePrev,
  setQuestion,
  setAnswer,
  setStep,
  setDisableNext,
  setDisablePrev,
  setDescription,
  comparison,
  relationships,
  composition,
  distribution,
}) => {
  const [value, setValue] = useState("");
  const [helperText, setHelperText] = useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
  };

  const { t } = useTranslation(); // dil

  const handleComparison = () => {
    // COMPARİSON
    setAnswer("comparison");
    step[0].description = t("tex23");
    step[0].label = 2;
  };
  const handleStatic = () => {
    // COMPARİSON
    setAnswer("static");
    step[0].description = t("tex24");
    step[0].label = 3;
  };
  const handleComparisonOneVariable = () => {
    // COMPARİSON
    setAnswer("comparisonOneVariable");
    setTimeout(handleScroll(), 3000);
  };
  const handleComparisonTwoVariable = () => {
    // COMPARİSON
    setAnswer("comparisonTwoVariable");
    step[0].label = 3;
    setTimeout(handleScroll(), 3000);
  };

  const handleComparisonCOT = () => {
    // COMPARİSON
    setAnswer("comparionchangingovertime");
    step[0].description = t("tex25");
    step[0].label = 15;
  };
  const handleComparisonCOTMP = () => {
    // COMPARİSON
    setAnswer("comparionchangingovertimeMP");
    step[0].description = t("tex26");
    step[0].label = 16;
  };
  const handleComparisonCyclical = () => {
    // COMPARİSON
    setAnswer("comparisoncyclical");
    step[0].label = 16;
    setTimeout(handleScroll(), 3000);
  };
  const handleComparisonNonCyclical = () => {
    // COMPARİSON
    setAnswer("comparisonnoncyclical");
    step[0].label = 16;
    setTimeout(handleScroll(), 3000);
  };
  const handleComparisonCOTFP = () => {
    // COMPARİSON
    setAnswer("comparionchangingovertimeMP");
    step[0].description = t("tex27");
    step[0].label = 17;
  };
  const handleComparisonSingleorFewItems = () => {
    // COMPARİSON
    setAnswer("comparionchangingovertimeSOFI");
    step[0].label = 17;
    setTimeout(handleScroll(), 3000);
  };

  const handleComparisonFPManyItems = () => {
    // COMPARİSON
    setAnswer("comparionchangingovertimeMI");
    step[0].label = 17;
    setTimeout(handleScroll(), 3000);
  };
  const handleTwoorMoreVariable = () => {
    // COMPARİSON
    setAnswer("twoorMoreVariable");
    step[0].description = t("tex28");
    step[0].label = 4;
  };

  const handleComparisonFewItems = () => {
    // COMPARİSON
    setAnswer("comparisonFewItems");
    setTimeout(handleScroll(), 3000);
  };

  const handleComparisonManyItems = () => {
    // COMPARİSON
    setAnswer("comparisonManyItems");
    setTimeout(handleScroll(), 3000);
  };
  const handleRelationship = () => {
    // RELATİONSHİP
    setAnswer("relationships");
    step[0].description = t("tex24");
    step[0].label = 5;
  };
  const handleComposition = () => {
    // COMPOSİTİON
    setAnswer("composition");
    step[0].description = t("tex23");
    step[0].label = 6;
  };

  const handleDistribution = () => {
    setAnswer("distribution");
    step[0].description = t("tex24");
    step[0].label = 12;
  };

  // const threeVariable = () => {
  //   setAnswer("threeVariable");
  //   step[0].label = 4;
  // };

  const handleScroll = () => {
    document.getElementById("App").style.height = "1200px";
    window.scroll({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleCompositionFewPeriod = () => {
    // COMPOSITION
    setAnswer("compositionFewPeriods");
    step[0].description = t("tex29");
    step[0].label = 8;
  };
  const handleCompositionManyPeriods = () => {
    // COMPOSITION
    setAnswer("compositionManyPeriods");
    step[0].description = t("tex29");
    step[0].label = 9;
  };
  const handleCompositionCOT = () => {
    // COMPOSITION
    setAnswer("changin the over time");
    step[0].description = t("tex25");
    step[0].label = 7;
  };
  const handleCompositionStatic = () => {
    // COMPOSITION
    setAnswer("compositionManyPeriods");
    step[0].description = t("tex30");
    step[0].label = 10;
  };

  const handleOrdm = () => {
    // COMPOSITION
    setAnswer("FPOnlyRelativeDifferencesMatter");
    setTimeout(handleScroll(), 3000);
  };
  const handleRaadf = () => {
    // COMPOSITION
    setAnswer("FPRelativeAndAbsoluteDifferencesMatter");
    setTimeout(handleScroll(), 3000);
  };
  const handleOrdm2 = () => {
    // COMPOSITION
    setAnswer("MPOnlyRelativeDifferencesMatter");
    setTimeout(handleScroll(), 3000);
  };
  const handleRaadf2 = () => {
    // COMPOSITION
    setAnswer("MPRelativeAndAbsoluteDifferencesMatter");
    setTimeout(handleScroll(), 3000);
  };
  const handleCompositionStaticSSOT = () => {
    // COMPOSITION
    setAnswer("SimpleShareOfTotal");
    setTimeout(handleScroll(), 3000);
  };
  const handleCompositionStaticAST = () => {
    // COMPOSITION
    setAnswer("AccumulationOrSubtractionToTotal");
    setTimeout(handleScroll(), 3000);
  };
  const handleCompositionStaticCC = () => {
    // COMPOSITION
    setAnswer("ComponentOfComponents");
    setTimeout(handleScroll(), 3000);
  };
  const handleRelationshipTwoVariables = () => {
    // RELATİONSHİP
    setAnswer("relationshipTwoVariables");
    setTimeout(handleScroll(), 3000);
  };
  const handleRelationshipThreeVariables = () => {
    // RELATİONSHİP
    setAnswer("relationshipThreeVariables");
    setTimeout(handleScroll(), 3000);
  };

  const handleDistributionSingleVariable = () => {
    // DİSTRİBUTİON
    setAnswer("distrubitionsinglevariable");
    step[0].description = t("tex28");
    step[0].label = 13;
  };

  const handleDistributionTwoVariable = () => {
    // DİSTRİBUTİON
    setAnswer("DistributionTwoVariable");
    setTimeout(handleScroll(), 3000);
    step[0].label = 12;
  };
  const handleDistributionThreeVariable = () => {
    // DİSTRİBUTİON
    setAnswer("DistributionThreeVariable");
    setTimeout(handleScroll(), 3000);
    step[0].label = 12;
  };

  const handleDistributionFewItems = () => {
    // DİSTRİBUTİON
    setAnswer("DistributionFewItems");
    setTimeout(handleScroll(), 3000);
  };
  const handleDistributionManyItems = () => {
    // DİSTRİBUTİON
    setAnswer("DistributionManyItems");
    setTimeout(handleScroll(), 3000);
  };
  const handleBack = () => {
    step[0].label = step[0].label - 1;
  };

  const handleYes = () => {
    setAnswer("yes");
  };

  const handleNo = () => {
    setAnswer("no");
  };
  const handleClear = () => {
    setAnswer("");
    setQuestion("");
    document.getElementById("App").style.height = "600px";
    setStep([
      {
        label: 1,
        description: t("tex22"),
      },
    ]);
    setDisableNext(false);
    setDisablePrev(false);
  };
  useEffect(() => {
    if (step[0].label === 1 && answer === "yes") {
      setQuestion("soru 1 grafikleri gösteriliyor");
      setDisableNext(true);
      setDisablePrev(true);
    }

    if (step[0].label === 1 && answer === "no") {
      setStep([
        {
          label: "Soru 2",
          description:
            "İki veya daha fazla veri arasında karşılaştırma mı yapmak istiyorsunuz?",
        },
      ]);
      setAnswer("");
    }
    if (step[0].label === "Soru 2" && answer === "yes") {
      setStep([
        {
          label: "Soru 3",
          description:
            "İşlerin zaman içerisinde değişimlerini göstermek istiyor musunuz?",
        },
      ]);
      setAnswer("");
    }

    if (step[0].label === "Soru 2" && answer === "no") {
      setStep([
        {
          label: "Soru 5",
          description: "Anket sonuçlarını mı göstermek istiyor musunuz?",
        },
      ]);
      setAnswer("");
    }
    if (step[0].label === "Soru 3" && answer === "yes") {
      setQuestion("soru 3 grafikleri gösteriliyor");
      setDisableNext(true);
      setDisablePrev(true);
      setAnswer("");
    }

    if (step[0].label === "Soru 3" && answer === "no") {
      setStep([
        {
          label: "Soru 4",
          description:
            "Bir kıyaslama ile karşılaştırma mı yapmak istiyorsunuz?",
        },
      ]);
      setAnswer("");
    }
    if (step[0].label === "Soru 4" && answer === "yes") {
      setQuestion("soru 4 evet cevabının grafikleri gösteriliyor");
      setDisableNext(true);
      setDisablePrev(true);
      setAnswer("");
    }

    if (step[0].label === "Soru 4" && answer === "no") {
      setQuestion("soru 4 hayır cevabının grafikleri gösteriliyor");
      setDisableNext(true);
      setDisablePrev(true);
      setAnswer("");
    }
    if (step[0].label === "Soru 5" && answer === "yes") {
      setQuestion("soru 5 grafikleri gösteriliyor");
      setAnswer("");
      setDisableNext(true);
      setDisablePrev(true);
    }

    if (step[0].label === "Soru 5" && answer === "no") {
      setStep([
        {
          label: "Soru 6",
          description:
            "Bir verinin parçalarının bir bütünle nasıl ilişkili olduğunu açıklamak mı istiyorsunuz?",
        },
      ]);
      setAnswer("");
    }
    if (step[0].label === "Soru 6" && answer === "yes") {
      setQuestion("soru 6 grafikleri gösteriliyor");
      setAnswer("");
      setDisableNext(true);
      setDisablePrev(true);
    }

    if (step[0].label === "Soru 6" && answer === "no") {
      setStep([
        {
          label: "Soru 7",
          description:
            "Eldeki veriler başka bir veri kümesinden etkilendiğinde bir değişiklik olur mu?",
        },
      ]);
      setAnswer("");
    }
    if (step[0].label === "Soru 7" && answer === "yes") {
      setQuestion("soru 7 grafikleri gösteriliyor");
      setAnswer("");
      setDisableNext(true);
      setDisablePrev(true);
    }
  }, [answer]);

  return (
    <Box px={0}>
      <Typography
        variant="h3"
        gutterBottom
        style={{
          padding: 16,
          fontSize: 30,
          fontFamily: "Cursive",
          margin: "auto",
          color: "white",
        }}
      >
        {t("qft1")}
      </Typography>

      {step.map((item, index) => (
        <div>
          <Grid
            container
            className="gradient"
            style={{
              width: "auto",
              height: "385px",
              padding: 32,
              background: "#333333",
              boxShadow: "0px 8px 24px rgba(17, 17, 17, 0.26)",
            }}
            align="flex-end"
            alignItems="flex-end"
          >
            <Grid key={index} item xs={12}>
              <Typography className="text" variant="h4" gutterBottom>
                {item.description}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={10} justifyContent="center">
                  {step[0].label === 1 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleComparison}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {t("sec1")}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleRelationship}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"İlişkiAS"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleComposition}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Bileşim"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleDistribution}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Dağıtım"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 2 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleStatic}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Static"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleComparisonCOT}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Changing Over Time"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 3 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleComparisonOneVariable}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <LooksOneRoundedIcon />
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleComparisonTwoVariable}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <LooksTwoRoundedIcon />
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleTwoorMoreVariable}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <ThreeKPlusRoundedIcon />
                      </Button>
                    </>
                  )}
                  {step[0].label === 15 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleComparisonCOTMP}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Many Periods"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleComparisonCOTFP}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Few Periods"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 16 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleComparisonCyclical}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Evet"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleComparisonNonCyclical}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Hayır"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 17 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleComparisonSingleorFewItems}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Single or Few Items"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleComparisonFPManyItems}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Many Items"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 4 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleComparisonFewItems}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Few Items"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleComparisonManyItems}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Many Items"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 13 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleDistributionFewItems}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Few Items"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleDistributionManyItems}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Many Items"}
                      </Button>
                    </>
                  )}
                  {/* {step[0].label === 4 && (
                    <>
                        <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleYes}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Few Items"}
                      </Button>
                       <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleNo}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Many Items"}
                      </Button>
                    </>
                  )} */}
                  {step[0].label === 5 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleRelationshipTwoVariables}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <LooksTwoRoundedIcon />
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleRelationshipThreeVariables}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <Looks3RoundedIcon />
                      </Button>
                    </>
                  )}
                  {step[0].label === 6 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleCompositionCOT}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Changing Over Time"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleCompositionStatic}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Static"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 7 && (
                    <>
                      <Button
                        className="btn1"
                        //disabled={disableNext}
                        variant="contained"
                        onClick={handleCompositionFewPeriod}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Few Periods"}
                      </Button>
                      <Button
                        className="btn1"
                        //disabled={disablePrev}
                        variant="contained"
                        onClick={handleCompositionManyPeriods}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Many Periods"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 11 && (
                    <>
                      <Button
                        className="btn1"
                        //disabled={disableNext}
                        variant="contained"
                        onClick={handleCompositionFewPeriod}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Few Periods"}
                      </Button>
                      <Button
                        className="btn1"
                        //disabled={disablePrev}
                        variant="contained"
                        onClick={handleCompositionManyPeriods}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Many Periods"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 8 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleOrdm}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Only Relative Differences Matter"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleRaadf}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Relative and Absolute Differences Matter"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 9 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleOrdm2}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Only Relative Differences Matter"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleRaadf2}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Relative and Absolute Differences Matter"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 10 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleCompositionStaticSSOT}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Simple Share of Total"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleCompositionStaticAST}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Accumulation or Subtraction to Total"}
                      </Button>
                      <Button
                        className="btn1"
                        disabled={disablePrev}
                        variant="contained"
                        onClick={handleCompositionStaticCC}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {"Components of Components"}
                      </Button>
                    </>
                  )}
                  {step[0].label === 12 && (
                    <>
                      <Button
                        className="btn1"
                        disabled={disableNext}
                        variant="contained"
                        onClick={handleDistributionSingleVariable}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <LooksOneRoundedIcon />
                      </Button>
                      <Button
                        className="btn1"
                        // disabled={disablePrev}
                        variant="contained"
                        onClick={handleDistributionTwoVariable}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <LooksTwoRoundedIcon />
                      </Button>
                      <Button
                        className="btn1"
                        // disabled={disablePrev}
                        variant="contained"
                        onClick={handleDistributionThreeVariable}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        <Looks3RoundedIcon />
                      </Button>
                    </>
                  )}
                </Grid>
                <Grid item xs={2} justifyContent="center" align="end">
                  <Button
                    className="btnDanger"
                    variant="contained"
                    onClick={handleClear}
                    color="error"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {"Temizle"}
                  </Button>
                </Grid>
                {/* <Grid item xs={2} justifyContent="center" align="start">
                  {step[0].label > !1 && (
                    <Button
                      className="btnDanger"
                      variant="contained"
                      onClick={handleBack}
                      color="error"
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {"Geri"}
                    </Button>
                  )}
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </div>
      ))}
    </Box>
  );
};

export default QuestionForm;

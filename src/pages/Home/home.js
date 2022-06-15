import QuestionForm from "../../components/QuestionForm";
import { BarChart } from "../../components/BarChart";
import { LineChart } from "../../components/LineChart";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import { StackedBarChart } from "../../components/StackedBarChart";
import { PieChart } from "../../components/PieChart";
import { HorizontalBarChart } from "../../components/HorizontalBarChart";
import TreeMapGraph from "../../components/TreeMap";
import { Donut } from "../../components/Doughnut";
import { ScatterPlot } from "../../components/ScatterPlot";
import { ColumnGraph } from "../../components/ColumnGraph";
import MapChart from "../../components/MapChart";
import { FullStackedBar } from "../../components/FullStackedBar";
import { StackedBar } from "../../components/StackedBar";
import { SmallMultiples } from "../../components/SmallMultiples";
import { BubbleChart } from "../../components/BubbleChart";
import AreaGraph from "../../components/AreaGraph";
import CollapseBar from "../../components/Collapse";
import DotPlot from "../../components/DotPlot";
import { BackToGraph } from "../../components/BackToGraph";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Chartİnfo from "../../components/ChartİnfoCollapse";
import BenchmarkLine from "../../components/ComposedChart";
import SimpleRadarChart from "../../components/SimpleRadarChart";
import PercentAreaChart from "../../components/PercentAreaChart";
import LineHistogram from "../../components/LineHistogram";
import KeepMountedModal from "../../components/KeepMountedModal";
import i18n from "../../constants/i18n";

const Home = () => {
  const { t } = useTranslation();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(t("tex22"));
  const [description, setDescription] = useState("");
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);
  const [step, setStep] = useState([
    {
      label: 1,
      description: t("tex22"),
    },
  ]);
  const handleScroll = () => {
    window.scroll({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //localStorage.getItem("language") === "tr" ? "tr www" : "en www"
    if (localStorage.getItem("language") === "tr") {
      i18n.changeLanguage("tr");
      step[0].description = t("tex22");
      step[0].label = 1;
      setAnswer("");
      setQuestion("");
      document.getElementById("App").style.height = "600px";
    } else {
      i18n.changeLanguage("en");
      step[0].description = t("tex22");
      step[0].label = 1;
      setAnswer("");
      setQuestion("");
      document.getElementById("App").style.height = "600px";
    }
  }, [localStorage.getItem("language"), step]);

  return (
    <Box pt={10}>
      <Grid
        container
        spacing={4}
        justifyContent="space-around"
        align="center"
        style={{ padding: 32, background: "#18181a" }}
      >
        <Grid item xs={12} sm={9}>
          <QuestionForm
            question={question}
            answer={answer}
            step={step}
            disableNext={disableNext}
            disablePrev={disablePrev}
            setQuestion={setQuestion}
            setAnswer={setAnswer}
            setDescription={setDescription}
            setStep={setStep}
            setDisableNext={setDisableNext}
            setDisablePrev={setDisablePrev}
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        style={{ padding: 32 }}
        justifyContent="space-around"
        align="center"
      >
        {answer === "relationshipTwoVariables" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <ScatterPlot />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title={t("tex21")}
                    description={t("mod1")}
                    url={
                      "https://chartio.com/assets/2477fa/tutorials/charts/scatter-plots/848a5c96881e2e6f1387e74570e16e1fad2559ed65b83aec2a66b7bb86332275/scatter-plot-example-1.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "relationshipThreeVariables" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <BubbleChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex31")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title={t("tex31")}
                    description={t("mod2")}
                    url={
                      "https://46gyn61z4i0t1u1pnq2bbk2e-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/GapMinder-Bubble.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "FPOnlyRelativeDifferencesMatter" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <SmallMultiples />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Stacked 100% Column Char"
                    description="%100 yığılmış sütun grafiği, yığılmış sütunların toplamının (kümülatif) her zaman %100'e eşit olduğu, yığılmış sütunlarda birden çok veri serisinin göreli yüzdesini göstermesi amaçlanan bir Excel grafik türüdür. %100 yığılmış sütun grafiği, zaman içinde parçadan bütüne oranları gösterebilir, örneğin bölge başına üç aylık satışların oranı veya faize karşı anaparaya giden aylık ipotek ödemesinin oranı."
                    url={
                      "https://www.edrawsoft.com/chart/images/single-bar-chart-products.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "FPRelativeAndAbsoluteDifferencesMatter" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <StackedBarChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Stacked Column Chart"
                    description="Yığılmış Sütun Grafiği, birbiri üzerine dikey olarak yığılmış birkaç sütun serisinden oluşur. Her serinin uzunluğu, her veri noktasındaki değere göre belirlenir.

                    Yığılmış Sütun Grafikleri, çeşitli değişkenlerin her birinin ve toplamlarının nasıl değiştiğini aynı anda gözlemlemeniz gerekiyorsa mükemmel bir seçenektir."
                    url={
                      "https://www.amcharts.com/wp-content/uploads/2013/12/demo_7391_none-1.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "MPOnlyRelativeDifferencesMatter" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <PercentAreaChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="BAŞLIK"
                    description="Çizgi Grafiği Nedir ve Nerelerde Kullanılır?

                    İnsanlar tarafından çok fazla merak edilen çizgi grafiği çok önemli bir konu olarak karşımıza çıkıyor. Bu doğrultuda çizgi grafiğinin ne olduğu açıklaması: Kısaca devamlı olarak değişen verilerin eğilimlerinin belirli aralıklar ile gösterilmiş olduğu grafiğe çizgi grafiği denir.
                    
                    Yatay ve düşey eksendeki sürekliliği olan verilerin değerlerini işaretleyerek, bu işaretli olan noktaların düz çizgiler ile birleştirilmesi neticesinde ortaya çıkan grafik türüne çizgi grafiği denilmektedir.
                    
                    Çizgi grafiği aralıksız bir şekilde devam eden verilerin gösterildiği zamanlarda kullanılmaktadır.
                    Çizgi grafiği mevcut verilerin zaman aralığı içerisinde göstermiş olduğu değişiklikleri göstermek amacı doğrultusunda kullanılır. Ortaya çıkan bu veri değişikliklerini görsel şekilde daha kolay ve anlaşılır bir formda göstermek amacıyla kullanılır. Özellikle de aylar, çeyrekler yahut mali yıllar gibi verilerin zaman içerisinde değişim gösterdiği durumlarda çizgi grafiği kullanımı söz konusudur.
                    
                    Çizgi grafiği; Ay, Çeyrek yahut mali yıl gibi düzenli olan dağılmış verileri göstermek amacıyla kullanılır. Yıl gibi bir zaman aralığını temsil eden bir birkaç, eşit olan aralıklı sayısal etiketlerin kullanılması durumunda kullanılır. Tarihleri belirli aralıklar ile ya da gün, ay yahut yıl, sayısı gibi temel birimleri görüntülemek amacı doğrultusunda çizgi grafik kullanılır."
                    url={
                      "https://www.edrawsoft.com/chart/images/single-bar-chart-products.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "MPRelativeAndAbsoluteDifferencesMatter" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <AreaGraph />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="BAŞLIK"
                    description="Çizgi Grafiği Nedir ve Nerelerde Kullanılır?

                    İnsanlar tarafından çok fazla merak edilen çizgi grafiği çok önemli bir konu olarak karşımıza çıkıyor. Bu doğrultuda çizgi grafiğinin ne olduğu açıklaması: Kısaca devamlı olarak değişen verilerin eğilimlerinin belirli aralıklar ile gösterilmiş olduğu grafiğe çizgi grafiği denir.
                    
                    Yatay ve düşey eksendeki sürekliliği olan verilerin değerlerini işaretleyerek, bu işaretli olan noktaların düz çizgiler ile birleştirilmesi neticesinde ortaya çıkan grafik türüne çizgi grafiği denilmektedir.
                    
                    Çizgi grafiği aralıksız bir şekilde devam eden verilerin gösterildiği zamanlarda kullanılmaktadır.
                    Çizgi grafiği mevcut verilerin zaman aralığı içerisinde göstermiş olduğu değişiklikleri göstermek amacı doğrultusunda kullanılır. Ortaya çıkan bu veri değişikliklerini görsel şekilde daha kolay ve anlaşılır bir formda göstermek amacıyla kullanılır. Özellikle de aylar, çeyrekler yahut mali yıllar gibi verilerin zaman içerisinde değişim gösterdiği durumlarda çizgi grafiği kullanımı söz konusudur.
                    
                    Çizgi grafiği; Ay, Çeyrek yahut mali yıl gibi düzenli olan dağılmış verileri göstermek amacıyla kullanılır. Yıl gibi bir zaman aralığını temsil eden bir birkaç, eşit olan aralıklı sayısal etiketlerin kullanılması durumunda kullanılır. Tarihleri belirli aralıklar ile ya da gün, ay yahut yıl, sayısı gibi temel birimleri görüntülemek amacı doğrultusunda çizgi grafik kullanılır."
                    url={
                      "https://www.edrawsoft.com/chart/images/single-bar-chart-products.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "SimpleShareOfTotal" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <PieChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Pie Chart"
                    description="Pasta Grafiği, verileri dairesel grafikte görüntüleyen bir grafik türüdür. Grafiğin parçaları, her kategorideki bütünün kesiriyle orantılıdır. Başka bir deyişle, pastanın her dilimi bir bütün olarak gruptaki o kategorinin boyutuna göredir. Tüm 'pasta' bir bütünün yüzde 100'ünü temsil ederken, pasta (dilimleri) bütünün bölümlerini temsil eder."
                    url={
                      "https://www.oguzhantas.com/image/userfiles/images/GooglePASTAGrafik-GooglePieCharts.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "AccumulationOrSubtractionToTotal" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <img
                        src="https://docs.devexpress.com/WindowsForms/images/chart-control/waterfall-chart-elements.png"
                        alt=""
                        style={{ height: "250px", width: "550px" }}
                        // alt="logo"
                      />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Watefall Chart"
                    description="Şelale grafiği, bir şeyin iki nokta arasındaki değerindeki net değişimin ardındaki hikayeyi ortaya çıkaran belirli bir çubuk grafik türüdür. Şelale grafiği, yalnızca bir çubukta bir başlangıç değeri ve ikinci bir çubukta bir bitiş değeri göstermek yerine, bu net değişime katkıda bulunan tüm benzersiz bileşenleri bir araya getirir ve bunları tek tek görselleştirir."
                    url={
                      "https://images.squarespace-cdn.com/content/v1/55b6a6dce4b089e11621d3ed/1605220080143-VMWQJGGXH8DYZZGKTE16/Chart_WaterfallLarge.png?format=500w"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "ComponentOfComponents" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <StackedBarChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Stacked 100% Column Chart With Subcomponents"
                    description="% 100 yığılmış sütun grafiği, yığılmış sütunlardaki birden çok veri serisinin göreli yüzdesini göstermek için kullanılan ve yığılmış sütunların toplamının (kümülatif) her zaman% 100'e eşit olduğu bir Excel grafik türüdür. % 100 yığılmış sütun grafiği, örneğin bölge başına üç aylık satışların oranı veya faiz ve anaparaya giden aylık ipotek ödemesinin oranı gibi zaman içindeki parça-bütün oranlarını gösterebilir."
                    url={
                      "http://4.bp.blogspot.com/-xm9KQKvakzI/VQ10eGpgQ4I/AAAAAAAAAQ0/rHDHcH2pbkc/s1600/stacked_column_chart.gif"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "DistributionFewItems" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <StackedBarChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Column Histogram"
                    description="Histogram, bir grup veri noktasını kullanıcı tarafından belirtilen aralıklar halinde düzenleyen grafiksel bir gösterimdir. Bir çubuk grafiğe benzer şekilde, histogram bir veri serisini birçok veri noktası alarak ve bunları mantıksal aralıklara veya kutulara gruplayarak kolayca yorumlanabilir bir görsele yoğunlaştırır."
                    url={
                      "https://www.investopedia.com/thmb/s_P9kizceZAukOfXykrQimJmoL4=/660x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Histogram1-92513160f945482e95c1afc81cb5901e.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "DistributionManyItems" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <LineHistogram />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Line Histogram"
                    description="Histogram, bir grup veri noktasını kullanıcı tarafından belirtilen aralıklar halinde düzenleyen grafiksel bir gösterimdir. Bir çubuk grafiğe benzer şekilde, histogram bir veri serisini birçok veri noktası alarak ve bunları mantıksal aralıklara veya kutulara gruplayarak kolayca yorumlanabilir bir görsele yoğunlaştırır."
                    url={
                      "https://www.edrawsoft.com/chart/images/single-bar-chart-products.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "DistributionTwoVariable" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <ScatterPlot />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Dağılım Grafiği"
                    description="Bir dağılım grafiği (aka dağılım grafiği, dağılım grafiği), iki farklı sayısal değişkenin değerlerini temsil etmek için noktaları kullanır. Yatay ve dikey eksendeki her noktanın konumu, tek bir veri noktası için değerleri belirtir. Değişkenler arasındaki ilişkileri gözlemlemek için dağılım grafikleri kullanılır."
                    url={
                      "https://chartio.com/assets/2477fa/tutorials/charts/scatter-plots/848a5c96881e2e6f1387e74570e16e1fad2559ed65b83aec2a66b7bb86332275/scatter-plot-example-1.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "DistributionThreeVariable" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <img
                        src="http://2.bp.blogspot.com/-NgFh-mG39VU/VzscFtTSfjI/AAAAAAAAAfk/bIHDhUhkrloJp6KqNSzhZgnXtB0ktV6JQCK4B/s1600/Ads%25C4%25B1z3.jpg"
                        alt=""
                        style={{ height: "250px", width: "550px" }}
                        // alt="logo"
                      />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="3D Area Chart"
                    description="Bir 3B alan grafiği , belirli bir süre içindeki değişim miktarını vurgular veya birden çok öğeyi karşılaştırır. 3B alan grafikleri ayrıca çizilen değerlerin toplamını görüntüleyerek parçaların bir bütünle ilişkisini de gösterir.

                    Alan grafiği bir çizgi grafiği biçimidir, ancak x ekseni (yatay eksen) ile veri işaretçilerini bağlayan çizgi arasındaki alan renkle doldurulur. Bu, farklı veri serilerinin kapsadığı noktaların nerede çakıştığını görmeyi kolaylaştırır."
                    url={
                      "https://static.anychart.com/images/gallery/v8/3d-area-charts-3d-area-chart.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparisonOneVariable" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <ColumnGraph />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Single Bar Chart"
                    description="Tek çubuk grafikler, bir kategorideki bir öğenin ayrık değerlerini iletmek için kullanılır. Örneğin, bir çubuk grafik, belirli yaşlar için belirli bir özelliğe sahip erkek sayısını görüntüleyebilir. Bireyin belli bir özelliği vardır örnekleri de ayrı bir değer, ya da numarası, barın uzunluğunu değiştirerek görüntülenir."
                    url={
                      "https://www.edrawsoft.com/chart/images/single-bar-chart-products.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparisonTwoVariable" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <img
                        src="https://andypope.info/charts/colwidth3.gif"
                        alt=""
                        style={{ height: "250px", width: "550px" }}
                        // alt="logo"
                      />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Variable Width Column Chart"
                    description="Çubuk Mekko grafiği olarak da bilinen değişken genişlikli sütun grafiği, sütun genişliklerinin, toplam genişlik istenen grafik genişliğiyle eşleşecek ve sütunlar arasında boşluk kalmayacak şekilde ölçeklendirildiği bir çubuk grafiktir. Bu grafik, verilerdeki her kategori için iki farklı değişkenin değerlerini izlemek için kullanılabilir."
                    url={
                      "https://www.dundas.com/support/images/dbi/support-articles/data-vis/variable-width-06.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparisonFewItems" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <ColumnGraph />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Çoklu Çubuk Grafikler"
                    description="Çoklu çubuk grafik, her kategorinin iki veya daha fazla çubuğa sahip olması dışında normal bir çubuk grafikten başka bir şey değildir – her alt bölüm için bir tane. Örneğin, bir ülkenin nüfusunu beş yıllık bir süre boyunca çizersek, her yıl için iki çubuk çizebiliriz – biri kadın sayısını, diğeri erkek nüfusunu gösteren çubuk. Aşağıdaki diyagram, çoklu çubuk grafiğin bir örneğini göstermektedir."
                    url={
                      "https://allthingsstatistics.com/wp-content/uploads/2022/03/Example-to-illustrate-the-definition-of-a-multiple-bar-graph.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparisonManyItems" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <img
                        src="https://www.techprevue.com/wp-content/uploads/2016/12/comparison-bar-charts.jpg"
                        alt=""
                        style={{ height: "250px", width: "550px" }}
                        // alt="logo"
                      />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Gömülü Grafiklere Sahip Tablo"
                    description="Görselleştirme, bize izin veren her türlü grafiksel gösterimdir:

                    Keşif, büyük miktarda veriyle daha derin bir kavrayış elde etmemize yardımcı olur
                    
                    Keşif, aynı zamanda ekstra vizyon verir
                    
                    Analiz, desen bulmak için kullanılabilir
                    
                    İletişim, görselleştirme daha iyi iletişim kurmamıza yardımcı olur"
                    url={
                      "https://i1.wp.com/radacad.com/wp-content/uploads/2017/07/barbox.png?resize=1024%2C566&ssl=1"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparisoncyclical" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <SimpleRadarChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Circular Area Chart"
                    description="Örümcek veya Radar Grafiği, Dairesel Alan Grafiği olarak da bilinen bu grafik, bir öğenin puanları ve sıralamaları gibi farklı boyutları gösterir. Daha fazla dışarı noktası merkezi, daha yüksek bir kategori altında yer alıyor.
                    Dairesel alan grafikleri, çeşitli metriklerin bir işlevindeki bir boyutun üyelerini karşılaştırmanın harika bir yoludur. Örneğin, bir akıllı telefon satın almak istediğinizde, pil ömrü, kamera kalitesi ve bellek kapasitesi gibi çeşitli metriklerde birden fazla cihazı karşılaştırmak için bir radar grafiği kullanabilirsiniz.
                    "
                    url={
                      "https://dataviz5.files.wordpress.com/2020/04/screen-shot-2020-04-09-at-10.50.43-am-2.png?w=229"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparisonnoncyclical" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <LineChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Line Chart"
                    description="Çizgi grafiği, zaman içinde değişen bilgileri göstermek için kullanılan bir grafik türüdür. Düz çizgilerle birbirine bağlanmış birkaç nokta kullanarak çizgi grafikleri çiziyoruz. Buna çizgi grafik de diyoruz. Çizgi grafiği‘ 'x' ekseni ve 'y' ekseni olarak bilinen iki eksenden oluşur.

                    Yatay eksen x ekseni olarak bilinir.
                    Dikey eksen y ekseni olarak bilinir."
                    url={
                      "https://cdn-skill.splashmath.com/panel-uploads/GlossaryTerm/b71643c1d96241de937b897946c5c3bb/1560746107_example-of-line-graph.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparionchangingovertimeSOFI" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <BarChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Column Chart"
                    description="Sütun grafiği, her kategorinin bir dikdörtgenle temsil edildiği ve dikdörtgenin yüksekliğinin çizilen değerlerle orantılı olduğu bir veri görselleştirmesidir. Sütun grafikleri dikey çubuk grafikler olarak da bilinir.

                    Aşağıdaki örnekte, her çubuğun yüksekliği, her kola türünü favori olarak listeleyen kişilerin yüzdesiyle orantılıdır."
                    url={
                      "https://46gyn61z4i0t1u1pnq2bbk2e-wpengine.netdna-ssl.com/wp-content/uploads/2018/08/ColumnChart.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
        {answer === "comparionchangingovertimeMI" && (
          <>
            <Grid item xs={6}>
              <Paper
                className="gradientbg"
                style={{ backgroundColor: "#18181a" }}
                elevation={24}
                shadow={5}
              >
                <Box p={4}>
                  <Paper
                    style={{}}
                    className="chartBg"
                    elevation={24}
                    shadow={5}
                  >
                    <Grid className="chartContainer">
                      <LineChart />
                    </Grid>
                  </Paper>

                  <Grid spacing={4} className="descContainer">
                    {" "}
                    <Typography
                      style={{ fontSize: "28px" }}
                      className="description"
                    >
                      {t("tex21")}
                    </Typography>
                    <Typography style={{}} className="description">
                      {t("ex21")}
                    </Typography>
                  </Grid>
                  <KeepMountedModal
                    bold="true"
                    title="Line Chart"
                    description="Çizgi grafiği, zaman içinde değişen bilgileri göstermek için kullanılan bir grafik türüdür. Düz çizgilerle birbirine bağlanmış birkaç nokta kullanarak çizgi grafikleri çiziyoruz. Buna çizgi grafik de diyoruz. Çizgi grafiği‘ 'x' ekseni ve 'y' ekseni olarak bilinen iki eksenden oluşur.

                    Yatay eksen x ekseni olarak bilinir.
                    Dikey eksen y ekseni olarak bilinir."
                    url={
                      "https://cdn-skill.splashmath.com/panel-uploads/GlossaryTerm/b71643c1d96241de937b897946c5c3bb/1560746107_example-of-line-graph.png"
                    }
                  />
                </Box>
              </Paper>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Home;

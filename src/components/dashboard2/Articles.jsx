import React from "react";

// @mui Import
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

// Import Swiper React components
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// ----------------------------------------------

const Articles = () => {
  return (
    <div className="flex flex-wrap items-center m-10 bp1:hidden">
      <div className="w-full m-auto bp1:hidden">
        <Card color="paper" className=" w-full cursor-pointer bp1:hidden">
          <CardContent>
            <div>
              <Swiper
                direction="vertical"
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                grabCursor
                className="w-full h-48"
              >
                {/* First slide */}
                <SwiperSlide className="m-1">
                  <Box className="flex">
                    <Paper elevation={3}>
                      <img
                        src="https://apside.com/wp-content/uploads/2020/04/sncf-2-e1587645671724.jpg"
                        alt="train de la sncf"
                        className="w-44 h-full bg-center"
                      />
                    </Paper>
                    <Box className="flex flex-col ml-4">
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        className="italic pb-2"
                      >
                        - Apside News -
                      </Typography>
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        className="pb-2"
                      >
                        SUPERVISION APPLICATIVE - SNCF RÉSEAU
                      </Typography>
                      <Typography sx={{ fontSize: 12 }} className="pb-2">
                        Estelle Chardac
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} color="text.secondary">
                        Avec la mise en œuvre d’outils de supervision
                        applicative spécifiques, Apside soutient la mutation
                        technologique des applications SNCF vers le Cloud.
                      </Typography>
                      <Button
                        href="https://apside.com/que-faisons-nous/projets/supervision-applicative-sncf-reseau/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-pulse"
                      >
                        En savoir plus
                      </Button>
                    </Box>
                  </Box>
                </SwiperSlide>

                {/* Second slide */}

                <SwiperSlide>
                  <Box className="flex">
                    <Paper elevation={3}>
                      <img
                        src="https://apside.com/wp-content/uploads/2020/04/162-1.jpg"
                        alt="train de la sncf"
                        className="w-44 h-full bg-center"
                      />
                    </Paper>
                    <Box className="flex flex-col ml-4">
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        className="italic pb-2"
                      >
                        - Apside News -
                      </Typography>
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        className="pb-2"
                      >
                        DÉVELOPPEMENT LOGICIEL THERMO FISHER SCIENTIFIQUE
                      </Typography>
                      <Typography sx={{ fontSize: 12 }} className="pb-2">
                        Estelle Chardac
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} color="text.secondary">
                        Depuis 2016, Apside accompagne Thermo Fisher Scientific
                        sur le développement du logiciel d’acquisition et
                        post-processing des données pour les microscopes à
                        transmission d’électrons (S)TEM.
                      </Typography>
                      <Button
                        href="https://apside.com/que-faisons-nous/projets/developpement-logiciel-pour-thermo-fisher-scientific/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-pulse"
                      >
                        En savoir plus
                      </Button>
                    </Box>
                  </Box>
                </SwiperSlide>

                {/* Third slide */}
                <SwiperSlide>
                  <div className="flex">
                    {/* <Box className=""></Box> */}

                    <img
                      src="https://apside.com/wp-content/uploads/2020/02/JO.jpg"
                      alt="train de la sncf"
                      className="w-44 bg-center"
                    />

                    <div className="flex flex-col ml-4">
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        className="italic pb-2"
                      >
                        - Apside News -
                      </Typography>
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        className="pb-2"
                      >
                        TRANSFORMATION DES INFRASTRUCTURES IT - EUROSPORT
                      </Typography>
                      <Typography sx={{ fontSize: 12 }} className="pb-2">
                        Estelle Chardac
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} color="text.secondary">
                        Les équipes Apside Infogérance accompagnent Eurosport
                        dans son grand chantier de transformation de ses
                        infrastructures IT.
                      </Typography>
                      <Button
                        href="https://apside.com/que-faisons-nous/projets/transformation-infrastructures-it-eurosport/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-pulse"
                      >
                        En savoir plus
                      </Button>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Fourth slide */}
                <SwiperSlide>
                  <Box className="flex">
                    <Paper elevation={3}>
                      <img
                        src="https://apside.com/wp-content/uploads/2020/04/architecture-batiment.jpg"
                        alt="train de la sncf"
                        className="w-44 h-full bg-center"
                      />
                    </Paper>
                    <Box className="flex flex-col ml-4">
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        className="italic pb-2"
                      >
                        - Apside News -
                      </Typography>
                      <Typography
                        sx={{ fontSize: 20 }}
                        color="text.secondary"
                        className="pb-2"
                      >
                        TASK FORCE TRAITEMENT DE MASSE - S2E
                      </Typography>
                      <Typography sx={{ fontSize: 12 }} className="pb-2">
                        Estelle Chardac
                      </Typography>
                      <Typography sx={{ mb: 0.5 }} color="text.secondary">
                        Apside est intervenue pour garantir la maîtrise de la
                        montée en puissance d’une Task Force interne S2E.
                      </Typography>
                      <Button
                        href="https://apside.com/que-faisons-nous/projets/task-force-traitement-de-masse-s2e/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="animate-pulse"
                      >
                        En savoir plus
                      </Button>
                    </Box>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Articles;

<template>
    
    <div class="d-flex align-items-start">
        <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Aylık Ödeme Planı</button>
            <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Yıllık Ödeme Planı</button>
        </div>

        <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                <div class="ms-5 d-flex gap-5 align-items-start justify-content-center w-100">
                    <Pricingoptions
                        :items="featuresMounth1"
                        :title="titleMounth1"
                        :imgSrc="imgSrcMount1"
                        :ucret="ucretMounth1"
                        :loop="loopMounth"
                    ></Pricingoptions>

                    <Pricingoptions
                        :items="featuresMounth2"
                        :title="titleMounth2"
                        :imgSrc="imgSrcMount2"
                        :ucret="ucretMounth2"
                        :loop="loopMounth"
                    ></Pricingoptions>

                    <Pricingoptions
                        :items="featuresMounth3"
                        :title="titleMounth3"
                        :imgSrc="imgSrcMount3"
                        :ucret="ucretMounth3"
                        :loop="loopMounth"
                    ></Pricingoptions>  
                </div>

            </div>

            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                <div class="ms-5 d-flex gap-5 align-items-start justify-content-center w-100">
                    <Pricingoptions
                        :items="featuresYear1"
                        :title="titleYear1"
                        :imgSrc="imgSrcYear1"
                        :ucret="ucretYear1"
                        :loop="loopYear"
                    ></Pricingoptions>

                    <Pricingoptions
                        :items="featuresYear2"
                        :title="titleYear2"
                        :imgSrc="imgSrcYear2"
                        :ucret="ucretYear2"
                        :loop="loopYear"
                    ></Pricingoptions>

                    <Pricingoptions
                        :items="featuresYear3"
                        :title="titleYear3"
                        :imgSrc="imgSrcYear3"
                        :ucret="ucretYear3"
                        :loop="loopYear"
                    ></Pricingoptions>

                </div>

                
            </div>

        </div>
    </div>
    <div>
        
    </div>
</template>
  
<script>
import Pricingoptions from './Pricingoptions.vue';

  export default {
    components: {
        Pricingoptions,
    },
    data(){
        return {
            loopYear: "yıl",
            loopMounth: "ay",
            
            // Plan -1
            featuresMounth1: [
                {id: 1, feature: "Özellik -1"},
                {id: 2, feature: "Özellik -2"}
            ],
            titleMounth1: "Başlık 1",
            imgSrcMount1: "/illustrations/programmer.svg",
            ucretMounth1: "19",
            
            // Plan -2
            featuresMounth2: [
                {id: 1, feature: "Özellik -1"},
                {id: 2, feature: "Özellik -2"},
                {id: 3, feature: "Özellik -3"},
                {id: 4, feature: "Özellik -4"}
            ],
            titleMounth2: "Başlık 2",
            imgSrcMount2: "/illustrations/programmer.svg",
            ucretMounth2: "49",
            
            // Plan -3
            featuresMounth3: [
                {id: 1, feature: "Özellik -1"},
                {id: 2, feature: "Özellik -2"},
                {id: 3, feature: "Özellik -3"},
                {id: 4, feature: "Özellik -4"},
                {id: 5, feature: "Özellik -5"},
                {id: 6, feature: "Özellik -6"}
            ],
            titleMounth3: "Başlık 3",
            imgSrcMount3: "/illustrations/programmer.svg",
            ucretMounth3: "89",
            
            // Plan Year -1
            featuresYear1: [
                {id: 1, feature: "Özellik -1"},
                {id: 2, feature: "Özellik -2"},
            ],
            titleYear1: "Başlık 1",
            imgSrcYear1: "/illustrations/programmer.svg",
            ucretYear1: "199",
            
            // Plan Year -2
            featuresYear2: [
                {id: 1, feature: "Özellik -1"},
                {id: 2, feature: "Özellik -2"},
                {id: 3, feature: "Özellik -3"},
                {id: 4, feature: "Özellik -4"},
            ],
            titleYear2: "Başlık 2",
            imgSrcYear2: "/illustrations/programmer.svg",
            ucretYear2: "549",
            
            // Plan Year -3
            featuresYear3: [
                {id: 1, feature: "Özellik -1"},
                {id: 2, feature: "Özellik -2"},
                {id: 3, feature: "Özellik -3"},
                {id: 4, feature: "Özellik -4"},
                {id: 5, feature: "Özellik -5"},
                {id: 6, feature: "Özellik -6"},
            ],
            titleYear3: "Başlık 3",
            imgSrcYear3: "/illustrations/shopping.svg",
            ucretYear3: "799",
        }
    }
  };
</script>
  
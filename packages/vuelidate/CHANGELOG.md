# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.0.0-alpha.2](https://github.com/vuelidate/vuelidate/compare/@vuelidate/core@2.0.0-alpha.1...@vuelidate/core@2.0.0-alpha.2) (2020-09-13)


### Bug Fixes

* **compat:** fix mixin; fix plugin object ([06d5e49](https://github.com/vuelidate/vuelidate/commit/06d5e49154897bce109d576dd70739b659d2d9dc))


### Features

* **compat:** use vue-demi for compat and apply vue 2.x fixes ([1ff120b](https://github.com/vuelidate/vuelidate/commit/1ff120b75c49025cfd01aac47d178cb73c6134a5))





# [2.0.0-alpha.1](https://github.com/vuelidate/vuelidate/compare/@vuelidate/core@2.0.0-alpha.0...@vuelidate/core@2.0.0-alpha.1) (2020-08-08)


### Bug Fixes

* **core:** allow for no validation rules when using useVuelidate ([5119f05](https://github.com/vuelidate/vuelidate/commit/5119f0580ddceccbfcdda272b1bcd9d381891794))
* **core:** ensure registerAs is always valid ([b01de4b](https://github.com/vuelidate/vuelidate/commit/b01de4b24d39017dff5e2d0adc1973199686f28f))
* **core:** fallback $params to empty object. Properly propagate $pending up to the root ([0b0d0d3](https://github.com/vuelidate/vuelidate/commit/0b0d0d329d0e74ecd18feadfedf73fc9f3e37a3f))
* **core:** fix $model on state ([37b65d4](https://github.com/vuelidate/vuelidate/commit/37b65d4659de74f85c3fbc2f14c4a00adf66762e))
* **core:** make $errors a reactive object ([3848e7b](https://github.com/vuelidate/vuelidate/commit/3848e7b7778571b400be74a668e5123814753ff9))
* **core:** move validations into $v computed for correct this ([55017c5](https://github.com/vuelidate/vuelidate/commit/55017c5bd3810a8bb9b9b3dec8242e97d3c9c185))
* remove unnecessary watch options ([b8c5181](https://github.com/vuelidate/vuelidate/commit/b8c5181c7a98e2be918935c1a15a494f49daf6e3))
* **core:** normalize validator output ([af116cc](https://github.com/vuelidate/vuelidate/commit/af116ccac66a36c608b0115d3ad1380deaddffda))
* **core:** unwrap $params in $message function ([e8e9074](https://github.com/vuelidate/vuelidate/commit/e8e90749f666b2765e1316cd884ed70a15cd7540))
* **core:** unwrap child results ([fe2c6f4](https://github.com/vuelidate/vuelidate/commit/fe2c6f46a2df2d3a4841a996d11d47f1a4bd6146))
* **core:** unwrap state when creating validation results ([99f9029](https://github.com/vuelidate/vuelidate/commit/99f90293e2c363ff2fa100e6398169d1aa20b49d))
* **core:** use cached setValidations state ([99d4728](https://github.com/vuelidate/vuelidate/commit/99d47289245b643d58f41e464902935b9af7f365))
* **vuelidate:** remove double nested result injection ([33aff45](https://github.com/vuelidate/vuelidate/commit/33aff45f2c1ac46c68f947e67db30be872c185e7))


### Features

* **core:** 🚀 Add context-aware validation support ([771828e](https://github.com/vuelidate/vuelidate/commit/771828e43654e453f5ca8d4719ca5466b5d363f8))
* **core:** $anyDirty should fallback on $dirty ([6b10bb4](https://github.com/vuelidate/vuelidate/commit/6b10bb4260f22040a24ee56e6ef728522ebe9796))
* **core:** add mixin support for old options API ([682bf74](https://github.com/vuelidate/vuelidate/commit/682bf748b684d4a1ee008affed350179ded4eb6a))
* replace vue-cli with vite ([#664](https://github.com/vuelidate/vuelidate/issues/664)) ([c155404](https://github.com/vuelidate/vuelidate/commit/c155404769fc78ceca5a2b766d0abf2071bff987))
* **core:** improve docs and add $propertyPath property to validators ([9ec284c](https://github.com/vuelidate/vuelidate/commit/9ec284cc08312fc87261c0f896cbb62542652aca))
* **core:** lazy validations ([8b95a0b](https://github.com/vuelidate/vuelidate/commit/8b95a0b2e279771634824bc8d90eb661ebedca07))
* **core:** make message an empty string by default ([cb7dc1d](https://github.com/vuelidate/vuelidate/commit/cb7dc1d38f09f31f573ff8cc24a53ec9c76c275b))
* **core:** make RegisterAs optional; use comp name & uid as key ([2fa7976](https://github.com/vuelidate/vuelidate/commit/2fa79760606ba5c7c591f115849b2b344486feb7))
* **core:** rename variables after review ([3bb7341](https://github.com/vuelidate/vuelidate/commit/3bb7341f7f43fff233ebcd1c121cf12427406c1a))
* **core:** update to Vue 3 ([35a49c3](https://github.com/vuelidate/vuelidate/commit/35a49c3aad7a7d14840e24b5d47f5929c87cbbf5))
* add $dirty cache WIP ([5725a38](https://github.com/vuelidate/vuelidate/commit/5725a38da12848fc699c719dafa06706107f0374))
* Add $touch and $reset to root. ([#626](https://github.com/vuelidate/vuelidate/issues/626)) ([a80c164](https://github.com/vuelidate/vuelidate/commit/a80c164db882a860fc3e1c30c14d083f83c2c2a9))
* add support for $model with reactive ([75c821d](https://github.com/vuelidate/vuelidate/commit/75c821db3eb71183c8be73c7f842efdf712fc07b))
* add validate function and other improvements ([#663](https://github.com/vuelidate/vuelidate/issues/663)) ([0d1ca73](https://github.com/vuelidate/vuelidate/commit/0d1ca73ca5f7574e15256cf8bfa94ea6170dc2dc))





# [1.0.0-alpha.2](https://github.com/vuelidate/vuelidate/compare/@vuelidate/core@1.0.0-alpha.1...@vuelidate/core@1.0.0-alpha.2) (2019-11-05)

**Note:** Version bump only for package @vuelidate/core





# 1.0.0-alpha.1 (2019-11-04)


### Features

* **validators:** Update validators to v 1.x. ([2e5b8c9](https://github.com/vuelidate/vuelidate/commit/2e5b8c9e777c94ab40d7762f6ddc6a82e6e02651))
* add jest as a global and package level test runner ([eb4c875](https://github.com/vuelidate/vuelidate/commit/eb4c875a442d626fec1b68d03e043c4ec94cfea9))
* move validator tests ([658a615](https://github.com/vuelidate/vuelidate/commit/658a6152f958cf6fc9c1028457682622d367e006))
* Rewrite Vuelidate with Vue 3.0 new reactivity API ([0794780](https://github.com/vuelidate/vuelidate/commit/0794780c5937cdc11ab8aa5447c85fa0a77d0932))





# 1.0.0-alpha.1 (2019-11-04)


### Features

* **validators:** Update validators to v 1.x. ([2e5b8c9](https://github.com/vuelidate/vuelidate/commit/2e5b8c9e777c94ab40d7762f6ddc6a82e6e02651))
* add jest as a global and package level test runner ([eb4c875](https://github.com/vuelidate/vuelidate/commit/eb4c875a442d626fec1b68d03e043c4ec94cfea9))
* move validator tests ([658a615](https://github.com/vuelidate/vuelidate/commit/658a6152f958cf6fc9c1028457682622d367e006))
* Rewrite Vuelidate with Vue 3.0 new reactivity API ([0794780](https://github.com/vuelidate/vuelidate/commit/0794780c5937cdc11ab8aa5447c85fa0a77d0932))

---
layout: page
permalink: /research/
title: research
description:
years: [2021, 2020]
nav: true
---

<div class="section_title">Publications</div>

<div class="publications">

  <!-- #2022 -->
  <h2 class="year">2022</h2>

  <!-- PYTHAE -->
  <div class="row">
    <div class="col-sm-2 abbr">
      <span class="badge badge-success">proceedings</span>
    </div>
    <div id="3" class="col-sm-8">
        <div class="title">Pythae: Unifying Generative Autoencoders in Python -- A Benchmarking Use Case</div>
        <div class="author">
          <em>Chadebec, C.</em>, Vincent, L. J. and Allassonnière, S.
        </div>
         <div class="book"><em>Accepted to Neural Information Processing Systems (NeurIPS 2022).</em></div>
      <div class="links">
        <a class="abstract btn btn-sm z-depth-0" role="button">
        Abs
        </a>
        <a href="http://arxiv.org/abs/{{ 2206.08309}}" class="btn btn-sm z-depth-0"   role="button" target="_blank">arXiv</a>
        <a href="{{'/assets/bibtex/chadebec2022pythae.bib' | relative_url }}"   class="btn btn-sm z-depth-0" role="button" target="_blank">Bibtex</a>
      </div>
      <div class="abstract hidden">
        <p>
          In recent years, deep generative models have attracted increasing interest due to their capacity to model complex distributions. Among those models, variational autoencoders have gained popularity as they have proven both to be computationally efficient and yield impressive results in multiple fields. Following this breakthrough, extensive research has been done in order to improve the original publication, resulting in a variety of different VAE models in response to different tasks. In this paper we present Pythae, a versatile open-source Python library providing both a unified implementation and a dedicated framework allowing straightforward, reproducible and reliable use of generative autoencoder models. We then propose to use this library to perform a case study benchmark where we present and compare 19 generative autoencoder models representative of some of the main improvements on downstream tasks such as image reconstruction, generation, classification, clustering and interpolation. The open-source library can be found at  <a href="https://github.com/clementchadebec/benchmark_VAE" target="blank">this https URL</a>.
          </p>
      </div>
    </div>
  </div>

  <!-- Geometric Perspective on VAEs -->
  <div class="row">
    <div class="col-sm-2 abbr">
      <span class="badge badge-success">proceedings</span>
    </div>
    <div id="3" class="col-sm-8">
        <div class="title">A Geometric Perspective on Variational Autoencoders</div>
        <div class="author">
          <em>Chadebec, C.</em> and Allassonnière, S.
        </div>
         <div class="book"><em>Accepted to Neural Information Processing Systems (NeurIPS 2022).</em></div>
      <div class="links">
        <a class="abstract btn btn-sm z-depth-0" role="button">
        Abs
        </a>
        <a href="https://arxiv.org/abs/2209.07370" class="btn btn-sm z-depth-0"   role="button" target="_blank">arXiv</a>
        <a href="{{'/assets/bibtex/chadebec2022geometric.bib' | relative_url }}"   class="btn btn-sm z-depth-0" role="button" target="_blank">Bibtex</a>
      </div>
      <div class="abstract hidden">
        <p>
          This paper introduces a new interpretation of the Variational Autoencoder framework by taking a fully geometric point of view. We argue that vanilla VAE models unveil naturally a Riemannian structure in their latent space and that taking into consideration those geometrical aspects can lead to better interpolations and an improved generation procedure. This new proposed sampling method consists in sampling from the uniform distribution deriving intrinsically from the learned Riemannian latent space and we show that using this scheme can make a vanilla VAE competitive and even better than more advanced versions on several benchmark datasets. Since generative models are known to be sensitive to the number of training samples we also stress the method's robustness in the low data regime.
          </p>
      </div>
    </div>
  </div>

  <!-- DA HDLSS -->
  <div class="row">
    <div class="col-sm-2 abbr">
      <span class="badge badge-secondary">journal</span>
    </div>
    <div id="3" class="col-sm-8">
        <div class="title">Data Augmentation in High Dimensional Low Sample Size  Setting Using a Geometry-Based Variational Autoencoder</div>
        <div class="author">
          <em>Chadebec, C.</em>, Thibeau-Sutre, E., Burgos, N. and Allassonnière, S.
        </div>
        <div class="book"><em>IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI).</em></div>
      <div class="links">
        <a class="abstract btn btn-sm z-depth-0" role="button">
        Abs
        </a>
        <a href="http://arxiv.org/abs/{{ 2105.00026 }}" class="btn btn-sm z-depth-0"   role="button" target="_blank">arXiv</a>
        <a href="{{'/assets/bibtex/chadebec_data_2021.bib' | relative_url }}"   class="btn btn-sm z-depth-0" role="button" target="_blank">Bibtex</a>
      </div>
      <div class="abstract hidden">
        <p>
          In this paper, we propose a new method to perform data augmentation in a reliable way in the High Dimensional Low Sample Size (HDLSS) setting using a geometry-based variational autoencoder. Our approach combines a proper latent space modeling of the VAE seen as a Riemannian manifold with a new generation scheme which produces more meaningful samples especially in the context of small data sets. The proposed method is tested through a wide experimental study where its robustness to data sets, classifiers and training samples size is stressed. It is also validated on a medical imaging classification task on the challenging ADNI database where a small number of 3D brain MRIs are considered and augmented using the proposed VAE framework. In each case, the proposed method allows for a significant and reliable gain in the classification metrics. For instance, balanced accuracy jumps from 66.3% to 74.3% for a state-of-the-art CNN classifier trained with 50 MRIs of cognitively normal (CN) and 50 Alzheimer disease (AD) patients and from 77.7% to 86.3% when trained with 243 CN and 210 AD while improving greatly sensitivity and specificity metrics.
          </p>
      </div>
    </div>
  </div>
  <!-- LongVAE -->
  <div class="row">
    <div class="col-sm-2 abbr">
      <span class="badge badge-primary">workshop</span>
    </div>
    <div id="3" class="col-sm-8">
        <div class="title">An Image Feature Mapping Model for Continuous Longitudinal Data Completion and Generation of Synthetic Patient Trajectories	</div>
        <div class="author">
          <em>Chadebec, C.</em>, Huijben, E. M., Pluim, J. P., Allassonnière, S. and J.M van Eijnatten, M. A.
        </div>
        <div class="book"><em>DGM4MICCAI: MICCAI Workshop on Deep Generative Models</em></div>
    </div>
  </div>

  <!-- #2021 -->
  <h2 class="year">2021</h2>

  <!-- DA DALI -->
  <div class="row">
    <div class="col-sm-2 abbr">
      <span class="badge badge-primary">workshop</span>
    </div>
    <div id="3" class="col-sm-8">
        <div class="title">Data Augmentation with Variational Autoencoders and Manifold Sampling</div>
        <div class="author">
          <em>Chadebec, C.</em> and Allassonnière, S.
        </div>
       <div class="book"><em>Deep Generative Models, and Data Augmentation, Labelling, and Imperfections.</em></div>
      <div class="links">
        <a class="abstract btn btn-sm z-depth-0" role="button">
        Abs
        </a>
        <a href="http://arxiv.org/abs/{{ 2103.13751 }}" class="btn btn-sm z-depth-0"   role="button" target="_blank">arXiv</a>
        <a href="{{'/assets/bibtex/chadebec_aug_2021.bib' | relative_url }}"   class="btn btn-sm z-depth-0" role="button" target="_blank">Bibtex</a>
      </div>
      <div class="abstract hidden">
        <p>
          We propose a new efficient way to sample from a Variational Autoencoder in the challenging low sample size setting. This method reveals particularly well suited to perform data augmentation in such a low data regime and is validated across various standard and real-life data sets. In particular, this scheme allows to greatly improve classification results on the OASIS database where balanced accuracy jumps from 80.7% for a classifier trained with the raw data to 88.6% when trained only with the synthetic data generated by our method. Such results were also observed on 3 standard data sets and with other classifiers. A code is available <a href="https://github.com/clementchadebec/Data_Augmentation_with_VAE-DALI" target="blank">here</a>.
        </p>
      </div>
    </div>
  </div>


  <!-- #2020 -->
  <h2 class="year">2020</h2>

  <!-- RHVAE -->
  <div class="row">
    <div class="col-sm-2 abbr">
      <span class="badge badge-info">preprint</span>
    </div>
    <div id="3" class="col-sm-8">
        <div class="title">Geometry-Aware Hamiltonian Variational Auto-Encoder</div>
        <div class="author">
          <em>Chadebec, C.</em> Mantoux, C. and Allassonnière, S.
        </div>
      <div class="links">
        <a class="abstract btn btn-sm z-depth-0" role="button">
        Abs
        </a>
        <a href="http://arxiv.org/abs/{{ 2010.11518 }}" class="btn btn-sm z-depth-0"   role="button" target="_blank">arXiv</a>
        <a href="{{'/assets/bibtex/chadebec_geometry-aware_2020.bib' | relative_url }}"   class="btn btn-sm z-depth-0" role="button" target="_blank">Bibtex</a>
      </div>
      <div class="abstract hidden">
        <p>
          Variational auto-encoders (VAEs) have proven to be a well suited tool for performing dimensionality reduction by extracting latent variables lying in a potentially much smaller dimensional space than the data. Their ability to capture meaningful information from the data can be easily apprehended when considering their capability to generate new realistic samples or perform potentially meaningful interpolations in a much smaller space. However, such generative models may perform poorly when trained on small data sets which are abundant in many real-life fields such as medicine. This may, among others, come from the lack of structure of the latent space, the geometry of which is often under-considered. We thus propose in this paper to see the latent space as a Riemannian manifold endowed with a parametrized metric learned at the same time as the encoder and decoder networks. This metric is then used in what we called the Riemannian Hamiltonian VAE which extends the Hamiltonian VAE introduced by <a href="http://arxiv.org/abs/1805.11328">arXiv:1805.11328</a> to better exploit the underlying geometry of the latent space. We argue that such latent space modelling provides useful information about its underlying structure leading to far more meaningful interpolations, more realistic data-generation and more reliable clustering. 
          </p>
      </div>
    </div>
  </div>
</div>


<div class="section_title">Talks & Presentations</div>

<div class="publications">

  
  <!-- #2021 -->
  <h2 class="year">2021</h2>

  <!-- ICM / ARAMIS -->
  <div class="row">
    <div class="col-sm-2 abbr">
      <span class="badge badge-default">seminar</span>
    </div>
    <div id="3" class="col-sm-8">
        <div class="title">Talk at ICM Paris Brain Institute / Aramis Lab  </div>
        <div class="author">
          <em>Chadebec, C.</em> and Thibeau-Sutre, E.
        </div>
      <div class="links">
        <a class="abstract btn btn-sm z-depth-0" role="button">
        Abs
        </a>
        <a href="{{'/assets/pdf/Presentation_ICM_28_05_21.pdf' | relative_url }}"   class="btn btn-sm z-depth-0" role="button" target="_blank">Slides</a>
      </div>
      <div class="abstract hidden">
        <p>
          We presented the main outcomes of our contribution Data Augmentation in High Dimensional Low Sample Size  Setting Using a Geometry-Based Variational Autoencoder" [<a href="http://arxiv.org/abs/{{ 2105.00026 }}">arxiv</a>] to the Aramis Lab team.
          </p>
      </div>
    </div>
  </div>
</div>





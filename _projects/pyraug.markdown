---
layout: page
title: Pyraug
description: A python library to perform data augmentation with VAEs
img: assets/img/pyraug_project/logo_pyraug_2.jpeg
github: https://github.com/clementchadebec/pyraug
documentation: https://pyraug.readthedocs.io/en/latest/
licence: https://opensource.org/licenses/Apache-2.0
download: https://github.com/clementchadebec/pyraug/stargazers
pypi_package: https://pypi.org/project/pyraug/
arxiv: https://arxiv.org/abs/2105.00026
importance: 1
category: work

bibliography: 2018-12-22-distill.bib
---


<div class="row ml-0 mr-0 p-0">
    <div class="row ml-0 mr-0 p-0"></div>
    <div class="icon" data-toggle="tooltip" title="Code Repository">
            <a href="{{ page.github }}" target="_blank"><i class="fab fa-github gh-icon fa-2x"></i></a>
        </div>
    <div class="row ml-2 mr-2 p-10"></div>
        <div class="icon" data-toggle="tooltip" title="Documentation">
            <a href="{{ page.documentation }}" target="_blank"><i class="fas fa-book fa-2x"></i></a>
        </div>
    <div class="row ml-2 mr-2 p-10"></div>
        <div class="icon" data-toggle="tooltip" title="Pypi Package">
            <a href="{{ page.pypi_package }}" target="_blank"><i class="fab fa-python fa-2x"></i></a>
        </div>
    <div class="row ml-2 mr-2 p-10"></div>
        <div class="icon" data-toggle="tooltip" title="Arxiv">
            <a href="{{ page.arxiv }}" target="_blank"><i class="ai ai-arxiv fa-2x"></i></a>
        </div>
</div>

<p style="margin-bottom: 2em">
</p>


### Why data augmentation ?

Even <d-cite key="ucar_bridging_2019"></d-cite>
though always larger data sets are now available, the lack of labeled data remains a tremendous issue in many fields of application. Among others, a good example is healthcare where practitioners have to deal most of the time with (very) low sample sizes (think of small patient cohorts) along with very high dimensional data (think of neuroimaging data that are 3D volumes with millions of voxels). Unfortunately, this leads to a very poor representation of a given population and makes classical statistical analyses unreliable. Meanwhile, the remarkable performance of algorithms heavily relying on the deep learning framework has made them extremely attractive and very popular. However, such results are strongly conditioned by the number of training samples since such models usually need to be trained on huge data sets to prevent over-fitting or to give statistically meaningful results. A way to address such issues is to perform Data Augmentation (DA) which consists in creating synthetic samples to enrich an initial data set and allow machine learning algorithm to better generalize on unseen data. For instance, the easiest way to do this on images is to apply simple transformations such as the addition of Gaussian noise, cropping or padding, and assign the label of the initial image to the created ones.

### Limitations of classic DA

While such augmentation techniques have revealed very useful, they remain strongly data dependent and limited. Some transformations may indeed be uninformative or even induce bias. For instance, think of a digit representing a 6 which gives a 9 when rotated. While assessing the relevance of augmented data may be quite straightforward for simple data sets, it reveals very challenging for complex data and may require the intervention of an _expert_ assessing the degree of relevance of the proposed transformations.

### Generative models: A new hope

The recent rise in performance of generative models such as GAN or VAE has made them very attractive models to perform DA. However, the main limitation to a wider use of these models is that they most of the time produce blurry and fuzzy samples. This undesirable effect is even more emphasized when they are trained with a small number of samples which makes them very hard to use in practice to perform DA in the high dimensional (very) low sample size (HDLSS) setting.

**This is why Pyraug was born!**

## **Case Study: Classification on 3D MRI (ADNI & AIBL)**

### Introduction

<p align="justify" style="text-align:justify"> 
A Riemannian Hamiltonian VAE model <d-cite key="chadebec_geometry-aware_2020"></d-cite> and <a href="https://github.com/clementchadebec/pyraug" target="blank">Pyraug software</a> were used to perform Data Augmentation in the High Dimensional Low Sample Size Setting on 3D MRI neuroimaging data from <a href="http://adni.loni.usc.edu/" target="blank">ADNI database</a>. The model was used to try to enhance the classification task consisting in finding Alzheimer's disease patients (AD) from Cognitively Normal participants (CN) using T1-weighted MR images <d-cite key="chadebec_data_2021"></d-cite>.  such augmentation.
</p>

### Classification set up


#### Data Splitting

<p align="justify">The ADNI data set was split into 3 sets: train, validation and test.
First, the test set was created using 100 randomly chosen participants for each diagnostic label (i.e. 100 CN, 100 AD). The rest of the data set was split such that 80% is allocated from training and 20% for validation. The authors ensured that age, sex and site distributions between the three sets were not significantly different. The train set is referred to as <i>train-full</i> in the following.

In addition, a smaller training set (denoted as <i>train-50</i>) was extracted from <i>train-full</i>. This set comprised only 50 images per diagnostic label, instead of 243 CN and 210 AD for <i>train-full</i>. It was ensured that age and sex distributions between <i>train-50</i> and <i>train-full</i> were not significantly different. This was not done for the site distribution as there are more than 50 sites in the ADNI data set (so they could not all be represented in this smaller training set). The AIBL data was <b>never used for training</b> or hyperparameter tuning and was only used as an <b>independent</b> test set.
</p>
<div class="img">
    <div class="col-sm mt-0 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pyraug_project/Case_study_1.jpg' | relative_url }}" alt="" title="Data Splitting"/>
    </div>
</div>
<div class="caption">
     Data Split for the classification task: Alzheimer Disease (AD) vs. Cognitively Normal (CN)
</div>



#### Data Processing


All the data was processed as follows:
<dl>
  <li> Raw data are converted to the BIDS standard <d-cite key="gorgolewski_brain_2016"></d-cite>.</li>
  <li> Bias field correction is applied using N4ITK <d-cite key="tustison_n4itk_2010"></d-cite>.</li>
  <li> T1w images are linearly registered to the MNI standard space <d-cite key="fonov_unbiased_2009"></d-cite> with ANTS <d-cite key="avants_insight_2014"></d-cite> and cropped. This produced images of size 169x208x179 with 1mm3 isotropic voxels.</li>
  <li> An automatic quality check is performed using an open-source pretrained network <d-cite key="fonov_deep_2018"></d-cite>. All images passed the quality check.</li>
  <li> NIfTI files are converted to tensor format.</li>
  <li> (Optional) Images are down-sampled using a trilinear interpolation, leading to an image size of 84x104x89.</li>
  <li> Intensity rescaling between the minimum and maximum values of each image is performed.</li>
</dl>

#### Classifier

<p align="justify">
To perform such classification task a CNN was used with two different paradigms to choose the architecture. First, the authors reused the same architecture as in <d-cite key="wen_convolutional_2020"></d-cite> which was obtained by optimizing manually the networks on the ADNI data set for the same task (AD vs CN). A slight adaption was done for the down-sampled images, which consisted in resizing the number of nodes in the fully-connected layers to keep the same ratio between the input and output feature maps in all layers. This  architecture is denoted <b>baseline</b>. Secondly, a random search was launched  <d-cite key="bergstra_random_2012"></d-cite> allowing to explore different hyperperameter values. The hyperparameters explored for the architecture were the number of convolutional blocks, of filters in the first layer and of convolutional layers in a block, the number of fully-connected layers and the dropout rate. Other hyperparameters such as the learning rate and the weight decay were also part of the search. 100 different random architectures were trained on the 5-fold cross-validation done on <i>train-full</i>. For each input, the selected  architecture is the one that obtained the best mean balanced accuracy across the validation sets of the cross-validation. This architecture is referred to as <b>optimized</b>.</p>
<div class="img">
    <div class="col-sm mt-0 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pyraug_project/CNNs.jpeg' | relative_url }}" alt="" title="CNN Networks"/>
    </div>
</div>
<div class="caption">
    CNN architectures: <i>left</i>: The baseline net. <i>right</i>: The optimized one using a random search across100 architectures.
</div>


#### Augmentation Set up

<p align="justify">
On the meantime, a RHVAE was trained on each class of the train sets (<i>train-50</i> or <i>train-full</i>) to be able to generate new synthetic data. Noteworthy is the fact that the VAE and the CNN shared the <b>same training set</b> and no augmentation was performed on the validation set or the test set.
</p>

<div class="img">
    <div class="col-sm mt-0 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pyraug_project/DA_diagram.png' | relative_url }}" alt="" title="DA framework"/>
    </div>
</div>
<div class="caption">
    Data Augmentation scheme with a VAE.
</div>

<p align="justify">
Then the <b>baseline</b> (resp. <b>optimized</b>) CNN networks were then trained for 100 (resp. 50) epochs using the cross entropy loss for training and validation losses. Balanced accuracy was also computed at the end of each epoch. The models were trained on either 1) only the <i>real</i> images; 2) only the synthetic samples created by the RHVAE or 3) the augmented training set (<i>real</i> + synthetic) on 20 independent runs for each experiment. The final model  was chosen as the one that obtained the highest validation balanced accuracy during training.  
</p>

#### Results

<p align="justify">
Below are presented some of the main results obtained in this case study. We refer the reader to <d-cite key="chadebec_data_2021"></d-cite> for the full results of the study.
<div class="container">
  <input type="checkbox" id="zoomCheck1">
    <label for="zoomCheck1">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pyraug_project/baseline_results.png' | relative_url }}" alt="zoom" title="Classification results"/>
    </label>
</div>
<div class="caption">
    Augmentation results with the <b>baseline</b> CNN network.
</div>


<div class="container">
  <input type="checkbox" id="zoomCheck2">
    <label for="zoomCheck2">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pyraug_project/optimized_results.png' | relative_url }}" alt="zoom" title="Classification results"/>
    </label>
</div>
<div class="caption">
    Augmentation results with the <b>optimized</b> CNN network.
</div>

<p align="justify">
<a href="https://github.com/clementchadebec/pyraug" target="blank">Pyraug software</a> allowed for a significant gain in the model classification results even when the CNN was optimized on the real data only (random search not performed for augmented data set) and even though small size data sets were considered along with very challenging high dimensional data.
</p>

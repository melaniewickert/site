---
title: "Masters Project"
date: 2018-08-10T10:53:28-05:00
menu: "main"
draft: false
type: "static"
weight: 1
---
# The effect of relatedness on group and community structure in Tanganyikan cichlids

<figure><video controls autoplay loop class="full-width" poster="/img/uploads/boxies.png">
    <source src="/video/boxes.webm" type="video/webm">
		<source src="/video/boxes.mp4" type="video/mp4">
		Sorry, your browser doesn't support HTML5 video.
</video>
<figcaption>Individual fish were motion-tracked for 10 minutes with each colour and box representing the movement profile of one animal</figcaption>
</figure>

For my Master’s thesis I investigated how the genetic relatedness of individuals influences group interactions and community structure in a social cichlid species. I looked at group living and nest building behaviours in *Neolamprologus multifasciatus*, the smallest cichlid species in the world, and endemic to Lake Tanganyika in Zambia. _N. multifasciatus_ live in small groups in close proximity to each other, usually separated by sand ridges. These nests can form large communities, which spread numerous meters in all directions and consist of uncovered gastropod shells that, dug out of the sediment in very specific behaviour, are used as shelters and breeding chambers. The uncovered shells, then create a distinct cratered landscape referred to as the shell bed.

However, the genetic and demographic structure of these groups and their composition had not been previously determined, and so an important piece of our understanding of their behaviour and the interactions between individuals was missing. Without taking their relatedness into account, behavioural traits can be misinterpreted or even missed completely, because individuals not showing aggressive interaction or displays may simply be explained by the relationship between individuals.

{{< figure src="/img/uploads/masters-a1.png" class="full-width" caption="Colour-coded movement tracks of individuals in the four-camera array, individual distribution of fish within nests, and distance from the nest edge of males and females" >}}

Data was collected from September through November 2017 along the Zambian coast of Lake Tanganyika while SCUBA diving. Behavioural footage and shell bed patterning were collected from seventeen communities at three different dive locations, with tissue samples taken from eight of those communities. During tissue collection, individuals were photographed for further identification in behavioural recordings using the unique vertical bar pattern that characterises this species.

Behavioural data was recorded via a multi-camera array, in which cameras were placed in a circular shape around the community facing inward to capture the movement of the individuals in three dimensions. Overhead images of the shell bed pattern were recorded and stitched together to create large-scale maps. From these maps I extracted the distance, orientation, and area of individual nests.

{{< figure src="/img/uploads/melboot.jpg" width="300px" class="alignleft" alt="Melanie Wickert on Lake Tanganyika" caption="On Lake Tanganyika" >}}

To quantify the shell bed structure, various analysis were conducted, looking for spatial autocorrelation of size and orientation, and zones of attraction and repulsion. I found significant autocorrelation of nest orientations across the three communities analysed but no significant correlation of perimeter length, area or diameter or nests. Pairwise correlation of nest locations and Ripley’s L test suggest that there is some sort of self-organising mechanism at work but the underlying behavioural mechanism for this pattern is not yet resolved.

Space use and behavioural data were annotated using a program built in the lab in Python using OpenCV. These data were also used to create a training set to automate this process in the future. Individuals were matched visibly between the different cameras, which were synchronised using a combination of visual and audio cues. The data did not show any sign for cooperative breeding in _N. multifasciatus_, a notable finding as other closely related cichlid species that live in extended family groups show this behaviour.

{{< figure src="/img/uploads/relatedness-color.png" class="full-width" caption="Full- and half-sibling connections (solid and dotted lines, respectively) between males (A), females (B), and juveniles and their most likely parents (C)" >}}

To answer the question about relatedness of individuals within groups and communities, I tested published primers of a closely related cichlid species _N. pulcher_ on the samples. Six of the eight tested primers worked surprisingly well, and five turned out to be polymorphic and therefore usable for the analysis. After performing microsatellite analysis on one community, different relatedness values and relationship coefficients could be calculated, demonstrating no correlation between the distance of the nests versus the relatedness. Looking at in- and out-group relatedness it could be shown that females within nests are significantly less related than outside the nests, which supports previously published data about the relatedness of _N. multifasciatus_ from 1997.

Unfortunately due to a limited budget and time, only one of the eight communities could be analysed, and therefore the results have to be handled with care. Once processed this data has great potential in helping to understand not only how individuals in these nests and communities are related, but also how they disperse and behave.

### Practical Courses:

* Human and Environmental toxicology investigating the reaction of kidney cells to drug compounds and their expression of functional cation transporters
* Dynamics of Aquatic Ecosystems investigating surface currents in the lower Lake Constance
* Behavioural Neurobiology investigating effects of restraining and grooming on associative learning and olfactory perception in _Apis mellifera_

### Final Modules:

* Ecotoxicology
* Toxicology

### Courses and Seminars:

* Pharmacology and Toxicology
* Disease Biology
* Advanced Course: Molecular Toxicology
* Applied Environmental Toxicology: From Academic Bench to Applied Law
* Environmental Catastrophies: hazardous substances released accidentally, their acute, mid- and long term human and environmental impacts, risk perception, risk communication and their management
* Evolutionary and Organismal Biology
* Dialogue moderation

##Component Hierarchy

**AuthFormContainer**
-AuthForm

**RootContainer**
-Header
-BuisnessContainer
-ReviewContainer
-FilterContainer

**HeaderContainer**
-home


**FilterContainer**
-SearchIndexItem
-Filters
-TypeOfClinic
-Map

**BusinessContainer**
-BusinessIndex
--BusinessIndexItem
---ReviewIndex


**ReviewContainer**
-ReviewIndex
--ReviewIndexItem
--ReviewDetail
---ReviewAdd
---ReviewEdit


Routes

Path	Component
"/sign-up"	"AuthFormContainer"
"/sign-in"	"AuthFormContainer"
"/"	"rootContainer"
"/business/:businessId/"	"Business Container"
"/business/:businessId/new-review"	"Review Container"
"/search-results"	"filter Container"

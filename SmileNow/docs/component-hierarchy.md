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
-Filters(type of clinic)

**BusinessContainer**
-BusinessIndex
--BusinessIndexItem
---ReviewIndex
--map


**ReviewContainer**
-ReviewIndex
--ReviewIndexItem
--ReviewDetail



Routes

Path	Component
"/sign-up"	"AuthFormContainer"
"/sign-in"	"AuthFormContainer"
"/"	"rootContainer"
"/business/:businessId/"	"Business Container"
"/business/:businessId/new-review"	"Review Container"
"/search-results"	"filter Container"

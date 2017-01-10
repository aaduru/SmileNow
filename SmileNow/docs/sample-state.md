{
  {
    session: {
      currentUser: {
        id: 1,
        username: 'uj'
      },
      errors: []
    }
  },
  clinics: {
    1: {
      name: "Tooth_friendly",
      clinic_imagic: "blah.jpg",
      type_of_clinic: ["Pediatric Dentist", "Orthodontist"]
    2: {
      name: "Smiles r us",
      clinic_imagic: "blah.jpg",
      type_of_clinic: ["Pediatric Dentist", "Orthodontist"]
    },
    3: {
      name: "Sfo dental",
      clinic_imagic: "blah.jpg",
      type_of_clinic: ["Pediatric Dentist", "Orthodontist"]
    },
  },
  clinicDetail: {
    1:{
      name: "Tooth_friendly",
      clinic_imagic: "blah.jpg",
      description: "blah blah",
      rating: 3,
      No_of_reviews: 1,
      type_of_clinic: ["Pediatric Dentist", "Orthodontist"]
      reviews: {
              1: {
                  author_id: 1,
                  ratings: 3,
                  content: "perfect for kids"
              }
              2: {
                  author_id: 2,
                  ratings: 3,
                  content: "perfect for kids"
              }
              3: {
                  author_id: 3,
                  ratings: 3,
                  content: "perfect for kids"
              }
            }
    }
  }
  reviews: {
    1: {
      author_id: 1,
      ratings: 3,
      content: "perfect for kids"
    }
  },
  filters: {
    search: "tooth", // name of the clinic
    type_of_clinic: "Pediatric Dentist"
  },

}

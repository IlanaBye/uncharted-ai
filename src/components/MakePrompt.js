function MakePrompt(promptData) {
  const institution = promptData?.institution || 'INSTITUTION';
  const personName = promptData?.personName || 'PERSON NAME';
  const yourName = promptData?.yourName || 'YOUR NAME';
  const relationship = promptData?.relationship || 'RELATIONSHIP';
  const importantInfo = promptData?.importantInfo || 'IMPORTANT INFO';
  console.log(promptData);

  return `Act as seasoned ${relationship} who is named ${yourName} writing a
      recommendation for the student named ${personName} and write a strong
      letter of recommendation to college or institution named "${institution}"
      that is formal in tone for a the student that includes the following
      details "${importantInfo}" Write it in a similar format and length as this
      letter "Dear Admissions Committee, It is with great enthusiasm that I
      write this letter of recommendation on behalf of Sophia, a truly
      exceptional and dedicated student. I have had the pleasure of knowing and
      working with Sophia for the past three years in our small high school
      setting, where students are known and valued. Throughout her time here,
      Sophia has consistently demonstrated her diligence, responsibility, and a
      strong commitment to her academic pursuits and extracurricular activities.
      Sophia intends to study within the business field and has displayed a
      remarkable aptitude for learning and personal growth. Her dedication to
      her studies is evident in her approach to overcoming obstacles,
      particularly with challenging AP classes. Sophia sought assistance from
      teachers and invested extra time outside of school to ensure she
      understood the subjects in which she initially struggled. This
      determination and proactive attitude are qualities that will undoubtedly
      contribute to her success in a university setting. In addition to her
      academic achievements, Sophia has actively engaged in a wide range of
      extracurricular activities. She has been learning piano, participating in
      the Kumon program for additional math and reading practice, and taking
      virtual art classes. Sophia's involvement in the Chick-Fil-A Leadership
      program and her initiation of the International Travel Club in 9th grade
      demonstrates her ability to lead and collaborate with her peers.
      Furthermore, her participation in the Korean Club, Financial Opt-In
      program, Volunteer Club, and girls basketball team highlights her
      well-rounded interests and talents. Sophia's leadership abilities are not
      limited to specific titles, as she consistently takes on roles that
      benefit her school community. She served as a student culture leader from
      2019 to 2021, assisting in the acclimation of incoming freshmen and
      allowing students to shadow her during school hours. Additionally, she has
      been a member of the National Honor Society since 2020. One particularly
      noteworthy accomplishment of Sophia's occurred during her junior year when
      she expressed a desire to take AP Chinese, a course not offered at our
      high school. Instead of allowing this setback to deter her, Sophia
      independently studied and prepared for the AP Chinese exam, ultimately
      earning a score of 5. This example perfectly encapsulates Sophia's
      perseverance and commitment to her education. In conclusion, I
      wholeheartedly recommend Sophia for admission to Colorado State
      University. Her diligence, hard work, and sense of responsibility,
      combined with her strong leadership skills and dedication to her academic
      and extracurricular pursuits, make her an ideal candidate for your
      institution. I am confident that she will not only succeed but also thrive
      within the Colorado State University community. Sincerely, Valerie
      Wilkinson"`;
}

export default MakePrompt;

import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFoot,
  TableHead,
  TableHeaderCell,
  TableRow,
} from './table'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Table',
  component: Table,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Table>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Table> = (args) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableHeaderCell>
          <abbr title="Position">Pos</abbr>
        </TableHeaderCell>
        <TableHeaderCell>Team</TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Played">Pld</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Won">W</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Drawn">D</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Lost">L</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Goals for">GF</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Goals against">GA</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Goal difference">GD</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Points">Pts</abbr>
        </TableHeaderCell>
        <TableHeaderCell>Qualification or relegation</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableFoot>
      <TableRow>
        <TableHeaderCell>
          <abbr title="Position">Pos</abbr>
        </TableHeaderCell>
        <TableHeaderCell>Team</TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Played">Pld</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Won">W</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Drawn">D</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Lost">L</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Goals for">GF</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Goals against">GA</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Goal difference">GD</abbr>
        </TableHeaderCell>
        <TableHeaderCell>
          <abbr title="Points">Pts</abbr>
        </TableHeaderCell>
        <TableHeaderCell>Qualification or relegation</TableHeaderCell>
      </TableRow>
    </TableFoot>
    <TableBody>
      <TableRow>
        <TableHeaderCell>1</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">
            Leicester City
          </a>{' '}
          <strong>(C)</strong>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>23</TableCell>
        <TableCell>12</TableCell>
        <TableCell>3</TableCell>
        <TableCell>68</TableCell>
        <TableCell>36</TableCell>
        <TableCell>+32</TableCell>
        <TableCell>81</TableCell>
        <TableCell>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
            title="2016–17 UEFA Champions League"
          >
            Champions League group stage
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>2</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">
            Arsenal
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>20</TableCell>
        <TableCell>11</TableCell>
        <TableCell>7</TableCell>
        <TableCell>65</TableCell>
        <TableCell>36</TableCell>
        <TableCell>+29</TableCell>
        <TableCell>71</TableCell>
        <TableCell>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
            title="2016–17 UEFA Champions League"
          >
            Champions League group stage
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>3</TableHeaderCell>
        <TableCell>
          <a
            href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
            title="Tottenham Hotspur F.C."
          >
            Tottenham Hotspur
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>19</TableCell>
        <TableCell>13</TableCell>
        <TableCell>6</TableCell>
        <TableCell>69</TableCell>
        <TableCell>35</TableCell>
        <TableCell>+34</TableCell>
        <TableCell>70</TableCell>
        <TableCell>
          Qualification for the
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
            title="2016–17 UEFA Champions League"
          >
            Champions League group stage
          </a>
        </TableCell>
      </TableRow>
      <TableRow className="is-selected">
        <TableHeaderCell>4</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Manchester_City_F.C." title="Manchester City F.C.">
            Manchester City
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>19</TableCell>
        <TableCell>9</TableCell>
        <TableCell>10</TableCell>
        <TableCell>71</TableCell>
        <TableCell>41</TableCell>
        <TableCell>+30</TableCell>
        <TableCell>66</TableCell>
        <TableCell>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
            title="2016–17 UEFA Champions League"
          >
            Champions League play-off round
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>5</TableHeaderCell>
        <TableCell>
          <a
            href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
            title="Manchester United F.C."
          >
            Manchester United
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>19</TableCell>
        <TableCell>9</TableCell>
        <TableCell>10</TableCell>
        <TableCell>49</TableCell>
        <TableCell>35</TableCell>
        <TableCell>+14</TableCell>
        <TableCell>66</TableCell>
        <TableCell>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
            title="2016–17 UEFA Europa League"
          >
            Europa League group stage
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>6</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Southampton_F.C." title="SouthHampton F.C.">
            Southampton
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>18</TableCell>
        <TableCell>9</TableCell>
        <TableCell>11</TableCell>
        <TableCell>59</TableCell>
        <TableCell>41</TableCell>
        <TableCell>+18</TableCell>
        <TableCell>63</TableCell>
        <TableCell>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
            title="2016–17 UEFA Europa League"
          >
            Europa League group stage
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>7</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/West_Ham_United_F.C." title="West Ham United F.C.">
            West Ham United
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>16</TableCell>
        <TableCell>14</TableCell>
        <TableCell>8</TableCell>
        <TableCell>65</TableCell>
        <TableCell>51</TableCell>
        <TableCell>+14</TableCell>
        <TableCell>62</TableCell>
        <TableCell>
          Qualification for the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#TableHeaderCellird_qualifying_round"
            title="2016–17 UEFA Europa League"
          >
            Europa League third qualifying round
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>8</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Liverpool_F.C." title="Liverpool F.C.">
            Liverpool
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>16</TableCell>
        <TableCell>12</TableCell>
        <TableCell>10</TableCell>
        <TableCell>63</TableCell>
        <TableCell>50</TableCell>
        <TableCell>+13</TableCell>
        <TableCell>60</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>9</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Stoke_City_F.C." title="Stoke City F.C.">
            Stoke City
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>14</TableCell>
        <TableCell>9</TableCell>
        <TableCell>15</TableCell>
        <TableCell>41</TableCell>
        <TableCell>55</TableCell>
        <TableCell>−14</TableCell>
        <TableCell>51</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>10</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Chelsea_F.C." title="Chelsea F.C.">
            Chelsea
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>12</TableCell>
        <TableCell>14</TableCell>
        <TableCell>12</TableCell>
        <TableCell>59</TableCell>
        <TableCell>53</TableCell>
        <TableCell>+6</TableCell>
        <TableCell>50</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>11</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Everton_F.C." title="Everton F.C.">
            Everton
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>11</TableCell>
        <TableCell>14</TableCell>
        <TableCell>13</TableCell>
        <TableCell>59</TableCell>
        <TableCell>55</TableCell>
        <TableCell>+4</TableCell>
        <TableCell>47</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>12</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C." title="Swansea City A.F.C.">
            Swansea City
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>12</TableCell>
        <TableCell>11</TableCell>
        <TableCell>15</TableCell>
        <TableCell>42</TableCell>
        <TableCell>52</TableCell>
        <TableCell>−10</TableCell>
        <TableCell>47</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>13</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Watford_F.C." title="Watford F.C.">
            Watford
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>12</TableCell>
        <TableCell>9</TableCell>
        <TableCell>17</TableCell>
        <TableCell>40</TableCell>
        <TableCell>50</TableCell>
        <TableCell>−10</TableCell>
        <TableCell>45</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>14</TableHeaderCell>
        <TableCell>
          <a
            href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
            title="West Bromwich Albion F.C."
          >
            West Bromwich Albion
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>10</TableCell>
        <TableCell>13</TableCell>
        <TableCell>15</TableCell>
        <TableCell>34</TableCell>
        <TableCell>48</TableCell>
        <TableCell>−14</TableCell>
        <TableCell>43</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>15</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C." title="Crystal Palace F.C.">
            Crystal Palace
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>11</TableCell>
        <TableCell>9</TableCell>
        <TableCell>18</TableCell>
        <TableCell>39</TableCell>
        <TableCell>51</TableCell>
        <TableCell>−12</TableCell>
        <TableCell>42</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>16</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth" title="A.F.C. Bournemouth">
            AFC Bournemouth
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>11</TableCell>
        <TableCell>9</TableCell>
        <TableCell>18</TableCell>
        <TableCell>45</TableCell>
        <TableCell>67</TableCell>
        <TableCell>−22</TableCell>
        <TableCell>42</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>17</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Sunderland_A.F.C." title="Sunderland A.F.C.">
            Sunderland
          </a>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>9</TableCell>
        <TableCell>12</TableCell>
        <TableCell>17</TableCell>
        <TableCell>48</TableCell>
        <TableCell>62</TableCell>
        <TableCell>−14</TableCell>
        <TableCell>39</TableCell>
        <TableCell></TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>18</TableHeaderCell>
        <TableCell>
          <a
            href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
            title="Newcastle United F.C."
          >
            Newcastle United
          </a>{' '}
          <strong>(R)</strong>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>9</TableCell>
        <TableCell>10</TableCell>
        <TableCell>19</TableCell>
        <TableCell>44</TableCell>
        <TableCell>65</TableCell>
        <TableCell>−21</TableCell>
        <TableCell>37</TableCell>
        <TableCell>
          Relegation to the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
            title="2016–17 Football League Championship"
          >
            Football League Championship
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>19</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Norwich_City_F.C." title="Norwich City F.C.">
            Norwich City
          </a>{' '}
          <strong>(R)</strong>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>9</TableCell>
        <TableCell>7</TableCell>
        <TableCell>22</TableCell>
        <TableCell>39</TableCell>
        <TableCell>67</TableCell>
        <TableCell>−28</TableCell>
        <TableCell>34</TableCell>
        <TableCell>
          Relegation to the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
            title="2016–17 Football League Championship"
          >
            Football League Championship
          </a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>20</TableHeaderCell>
        <TableCell>
          <a href="https://en.wikipedia.org/wiki/Aston_Villa_F.C." title="Aston Villa F.C.">
            Aston Villa
          </a>{' '}
          <strong>(R)</strong>
        </TableCell>
        <TableCell>38</TableCell>
        <TableCell>3</TableCell>
        <TableCell>8</TableCell>
        <TableCell>27</TableCell>
        <TableCell>27</TableCell>
        <TableCell>76</TableCell>
        <TableCell>−49</TableCell>
        <TableCell>17</TableCell>
        <TableCell>
          Relegation to the{' '}
          <a
            href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
            title="2016–17 Football League Championship"
          >
            Football League Championship
          </a>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export const TableExample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TableExample.args = {}

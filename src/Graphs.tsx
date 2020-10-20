import React, { useEffect, useState } from "react";
import { Button, View, Text, Dimensions, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";
import firebase, {firestore} from "./firebase"
import HowLongAgo from '@nwylynko/how-long-ago'
import { Container } from './Home'


export function Graphs() {

  const [loading, setLoading] = useState(true)

  const [labels, setLabels] = useState<string[]>([]);

  const [romantic, setRomantic] = useState<number[]>([]);
  const [motivated, setMotivated] = useState<number[]>([]);
  const [sad, setSad] = useState<number[]>([]);
  const [moody, setMoody] = useState<number[]>([]);
  const [happy, setHappy] = useState<number[]>([]);
  const [unmotivated, setUnmotivated] = useState<number[]>([]);
  const [bored, setBored] = useState<number[]>([]);

  useEffect(() => {
    firestore.collection('users')
      .doc(firebase.auth().currentUser?.uid)
      .collection('mood_data')
      .orderBy('timestamp')
      .get()
      .then(snapshot => snapshot.docs)
      .then((docs) => {
        docs.map(doc => {
          const data = doc.data()
          setLabels(state => [...state, data.timestamp])

          setRomantic(state => [...state, data.romantic])
          setMotivated(state => [...state, data.motivated])
          setSad(state => [...state, data.sad])
          setMoody(state => [...state, data.moody])
          setHappy(state => [...state, data.happy])
          setUnmotivated(state => [...state, data.unmotivated])
          setBored(state => [...state, data.bored])
        })

        setLoading(false)
        
      })
  }, [])

  if (loading) {
    return <Container><ActivityIndicator /></Container>
  }

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Text>Romantic</Text>
      <Chart data={romantic} labels={labels} colour="#e660e1" />
      <Text>Motivated</Text>
      <Chart data={motivated} labels={labels} colour="#e6a160" />
      <Text>Sad</Text>
      <Chart data={sad} labels={labels} colour="#60dbe6" />
      <Text>Moody</Text>
      <Chart data={moody} labels={labels} colour="#ba62e3" />
      <Text>Happy</Text>
      <Chart data={happy} labels={labels} colour="#f0de54" />
      <Text>Unmotivated</Text>
      <Chart data={unmotivated} labels={labels} colour="#44cf54" />
      <Text>Bored</Text>
      <Chart data={bored} labels={labels} colour="#8a8a8a" />
    </View>
  );
}

function Chart({data, labels, colour}: {data: number[], labels: string[], colour: string}) {
  return (
    <LineChart
    data={{
      labels,
      datasets: [
        {
          data
        }
      ]
    }}
      width={Dimensions.get("window").width} // from react-native
      height={220}
      yAxisInterval={1} // optional, defaults to 1
      formatXLabel={(x) => HowLongAgo(parseInt(x, 10), { seconds: 's', minutes: 'm', hours: 'h', days: 'd', else: '8' })}
      chartConfig={{
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 0, // optional, defaults to 2dp
        // color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        color: () => colour,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        // labelColor: () => "#",
        style: {
          borderRadius: 16,
        },
        propsForDots: {
          r: "3",
          strokeWidth: "2",
          stroke: colour,
        },
      }}
      bezier
      style={{
        margin: 8,
        borderRadius: 3,
      }}

    />
  );
}

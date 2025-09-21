import React from "react";
import { Sparkles, Code2, Zap, Target } from "lucide-react";
import { useLanguage } from "./LanguageContext";

const AISection = () => {
  const { language } = useLanguage();

  const bulletPoints = [
    {
      icon: <Sparkles className="h-5 w-5 text-purple-600" />,
      title: language === 'it' ? "Azure Cognitive Services Integration" : "Azure Cognitive Services Integration",
      description: language === 'it' ?
        "Implementazione completa di Azure AI per speech-to-text, analisi del sentiment e question answering con processing di 1000+ trascrizioni/ora." :
        "Complete Azure AI implementation for speech-to-text, sentiment analysis and question answering with 1000+ transcriptions/hour processing."
    },
    {
      icon: <Zap className="h-5 w-5 text-purple-600" />,
      title: language === 'it' ? "OpenAI GPT & Assembly.AI" : "OpenAI GPT & Assembly.AI",
      description: language === 'it' ?
        "Abstraction layer multi-provider per switch trasparente tra diversi servizi AI. Integrazione seamless con fallback automatico." :
        "Multi-provider abstraction layer for transparent switching between different AI services. Seamless integration with automatic fallback."
    },
    {
      icon: <Target className="h-5 w-5 text-purple-600" />,
      title: language === 'it' ? "NLP & Semantic Analysis" : "NLP & Semantic Analysis",
      description: language === 'it' ?
        "Sistemi avanzati di analisi semantica, question answering e indicizzazione full-text con Elasticsearch per ricerca intelligente." :
        "Advanced semantic analysis systems, question answering and full-text indexing with Elasticsearch for intelligent search."
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/50 rounded-full text-purple-700 dark:text-purple-300 text-sm mb-4">
              {language === 'it' ? 'Intelligenza artificiale' : 'Artificial Intelligence'}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {language === 'it' ? 
                "Integrazione AI per risultati concreti e misurabili" :
                "AI Integration for concrete and measurable results"
              }
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {language === 'it' ?
                  "7+ anni di esperienza nell'integrazione di servizi cognitivi per soluzioni enterprise. Ho implementato sistemi che processano migliaia di trascrizioni all'ora con accuracy superiore al 95%." :
                  "7+ years of experience integrating cognitive services for enterprise solutions. I've implemented systems that process thousands of transcriptions per hour with over 95% accuracy."
                }
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {language === 'it' ?
                  "Lead developer della piattaforma FEDRO CognitiveServices: un sistema completo di orchestrazione per acquisizione file audio, trascrizione mediante AI, analisi NLP e indicizzazione full-text." :
                  "Lead developer of FEDRO CognitiveServices platform: a complete orchestration system for audio file acquisition, AI transcription, NLP analysis and full-text indexing."
                }
              </p>

              <div className="space-y-6 mt-8">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Code Visual */}
            <div className="relative">
              <div className="bg-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="ml-4 text-gray-400 text-sm">cognitive_services.cs</span>
                </div>
                <pre className="p-4 text-sm overflow-x-auto">
                  <code className="text-gray-300">
{`// FEDRO CognitiveServices Integration
public class AIOrchestrator : IJobProcessor<AudioFile>
{
    private readonly IAzureCognitiveService _azure;
    private readonly IOpenAIService _openai;
    private readonly IAssemblyAIService _assembly;
    
    public async Task<TranscriptionResult> ProcessAsync(
        AudioFile file, CancellationToken ct)
    {
        // Multi-provider abstraction layer
        var transcription = await _providerSelector
            .GetOptimalProvider(file)
            .TranscribeAsync(file, ct);
            
        // NLP Analysis pipeline
        var analysis = await _nlpEngine.AnalyzeAsync(
            transcription, 
            new AnalysisOptions {
                EnableSentiment = true,
                EnableQuestionAnswering = true,
                EnableSemanticSearch = true
            });
            
        // Elasticsearch indexing
        await _searchEngine.IndexAsync(analysis);
        
        return new TranscriptionResult {
            Transcription = transcription,
            Analysis = analysis,
            ProcessingTime = stopwatch.Elapsed
        };
    }
}`}
                  </code>
                </pre>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;